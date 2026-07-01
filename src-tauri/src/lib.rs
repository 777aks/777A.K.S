// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::process::Command;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn shutdown() -> Result<(), String> {
    #[cfg(target_os = "windows")]
    {
        Command::new("shutdown")
            .args(["/s", "/t", "0"])
            .spawn()
            .map_err(|e| e.to_string())?;
    }
    #[cfg(any(target_os = "linux", target_os = "macos"))]
    {
        Command::new("shutdown")
            .arg("-h")
            .arg("now")
            .spawn()
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
fn reboot() -> Result<(), String> {
    #[cfg(target_os = "windows")]
    {
        Command::new("shutdown")
            .args(["/r", "/t", "0"])
            .spawn()
            .map_err(|e| e.to_string())?;
    }
    #[cfg(any(target_os = "linux", target_os = "macos"))]
    {
        Command::new("reboot")
            .spawn()
            .map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
fn clean_temp_files() -> Result<String, String> {
    #[cfg(target_os = "windows")]
    {
        let output = Command::new("cmd")
            .args(["/C", "del /s /f /q %temp%\\* & del /s /f /q C:\\Windows\\Temp\\*"])
            .output()
            .map_err(|e| e.to_string())?;

        if output.status.success() {
            Ok("Temporary files cleaned successfully".to_string())
        } else {
            Err(String::from_utf8_lossy(&output.stderr).to_string())
        }
    }
    #[cfg(not(target_os = "windows"))]
    {
        Ok("Not implemented for this OS".to_string())
    }
}

#[tauri::command]
fn flush_dns() -> Result<String, String> {
    #[cfg(target_os = "windows")]
    {
        let output = Command::new("ipconfig")
            .arg("/flushdns")
            .output()
            .map_err(|e| e.to_string())?;

        if output.status.success() {
            Ok("DNS Cache flushed successfully".to_string())
        } else {
            Err(String::from_utf8_lossy(&output.stderr).to_string())
        }
    }
    #[cfg(not(target_os = "windows"))]
    {
        Ok("Not implemented for this OS".to_string())
    }
}

#[tauri::command]
fn ping_host(host: String) -> Result<String, String> {
    #[cfg(target_os = "windows")]
    {
        let output = Command::new("ping")
            .args([&host, "-n", "4"])
            .output()
            .map_err(|e| e.to_string())?;

        if output.status.success() {
            Ok(String::from_utf8_lossy(&output.stdout).to_string())
        } else {
            Err(String::from_utf8_lossy(&output.stderr).to_string())
        }
    }
    #[cfg(not(target_os = "windows"))]
    {
        Ok("Ping not implemented for this OS in GUI".to_string())
    }
}

#[tauri::command]
fn run_sfc() -> Result<String, String> {
    #[cfg(target_os = "windows")]
    {
        let output = Command::new("sfc")
            .arg("/scannow")
            .output()
            .map_err(|e| e.to_string())?;

        if output.status.success() {
            Ok("SFC Scan completed successfully".to_string())
        } else {
            Err(String::from_utf8_lossy(&output.stderr).to_string())
        }
    }
    #[cfg(not(target_os = "windows"))]
    {
        Ok("Not implemented for this OS".to_string())
    }
}

#[tauri::command]
fn run_dism() -> Result<String, String> {
    #[cfg(target_os = "windows")]
    {
        let output = Command::new("DISM")
            .args(["/Online", "/Cleanup-Image", "/RestoreHealth"])
            .output()
            .map_err(|e| e.to_string())?;

        if output.status.success() {
            Ok("DISM Repair completed successfully".to_string())
        } else {
            Err(String::from_utf8_lossy(&output.stderr).to_string())
        }
    }
    #[cfg(not(target_os = "windows"))]
    {
        Ok("Not implemented for this OS".to_string())
    }
}

#[tauri::command]
fn get_hardware_info() -> String {
    // Simplified hardware info for now
    format!("Hardware info retrieved from Rust")
}

#[tauri::command]
fn get_extended_hardware_info() -> Result<String, String> {
    #[cfg(target_os = "windows")]
    {
        let output = Command::new("cmd")
            .args(["/C", "wmic cpu get name & wmic os get caption & wmic memorychip get capacity"])
            .output()
            .map_err(|e| e.to_string())?;

        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    }
    #[cfg(not(target_os = "windows"))]
    {
        Ok("Hardware info not available for this OS".to_string())
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            shutdown,
            reboot,
            clean_temp_files,
            flush_dns,
            ping_host,
            run_sfc,
            run_dism,
            get_hardware_info,
            get_extended_hardware_info
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
