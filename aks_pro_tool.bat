@echo off
setlocal enabledelayedexpansion
chcp 65001 >nul
title A.K.S NEWS TECHNOLOGY MULTI TOOL BOX KIT - PRO MODE
color 0A

:: ===============================
:: VERIFICATION ADMIN
:: ===============================
net session >nul 2>&1
if %errorLevel% NEQ 0 (
    echo ==========================================
    echo  ⚠ MODE ADMIN REQUIS
    echo  Relancez en tant qu'administrateur
    echo ==========================================
    pause
    exit /b
)

:: ===============================
:: LOG SYSTEM
:: ===============================
set "LOGFILE=AKS_LOG.txt"

echo ============================== >> "%LOGFILE%"
echo Lancement AKS TOOL - %date% %time% >> "%LOGFILE%"

:menu
cls
color 0B
echo ==========================================
echo   🔷 A.K.S NEWS TECHNOLOGY (PRO MODE)
echo   MULTI TOOL BOX KIT - SYSTEM ENGINE
echo ==========================================
echo.
echo  [1] 🔧 Diagnostic systeme
echo  [2] 🧹 Nettoyage systeme
echo  [3] ⚡ Optimisation performance
echo  [4] 🌐 Reseau & Internet
echo  [5] 💽 Disque & stockage
echo  [6] 🔐 Outils admin avancés
echo  [7] 🛠️ Reparation Windows
echo  [8] 🔄 Energie (Shutdown / Restart)
echo  [9] 📊 Informations PC
echo  [0] ❌ Quitter
echo.
set "choice="
set /p choice=👉 Choisissez une option :

if "%choice%"=="1" goto diag
if "%choice%"=="2" goto clean
if "%choice%"=="3" goto opti
if "%choice%"=="4" goto network
if "%choice%"=="5" goto disk
if "%choice%"=="6" goto admin
if "%choice%"=="7" goto repair
if "%choice%"=="8" goto power
if "%choice%"=="9" goto info
if "%choice%"=="0" exit /b

goto menu

:: ===============================
:diag
cls
color 0A
echo ===== DIAGNOSTIC SYSTEME =====
echo Analyse en cours...
systeminfo | findstr /B /C:"OS Name" /C:"OS Version" /C:"System Type"
wmic cpu get name
wmic memorychip get capacity

echo [%date% %time%] Diagnostic executé >> "%LOGFILE%"
pause
goto menu

:: ===============================
:clean
cls
color 0C
echo ===== NETTOYAGE SYSTEME =====
echo Suppression fichiers temporaires...

del /s /f /q "%temp%\*" >nul 2>&1
del /s /f /q "C:\Windows\Temp\*" >nul 2>&1
ipconfig /flushdns >nul

echo Nettoyage terminé ✔
echo [%date% %time%] Nettoyage systeme >> "%LOGFILE%"
pause
goto menu

:: ===============================
:opti
cls
color 0E
echo ===== OPTIMISATION =====
echo Optimisation du disque C: (cela peut prendre du temps)...
defrag C: /O

echo Optimisation terminée ✔
echo [%date% %time%] Optimisation >> "%LOGFILE%"
pause
goto menu

:: ===============================
:network
cls
color 0B
echo ===== RESEAU & INTERNET =====
ipconfig /all
echo.
echo Test de connexion vers Google...
ping google.com -n 4

echo [%date% %time%] Network check >> "%LOGFILE%"
pause
goto menu

:: ===============================
:disk
cls
color 0D
echo ===== DISQUE & STOCKAGE =====
wmic logicaldisk get deviceid, size, freespace, caption
echo.
echo Vérification du système de fichiers (Lecture seule)...
echo Pour une réparation complète, utilisez chkdsk C: /f au prochain redémarrage.
chkdsk C:

echo [%date% %time%] Disk check >> "%LOGFILE%"
pause
goto menu

:: ===============================
:admin
cls
color 0E
echo ===== OUTILS ADMIN AVANCES =====
echo Utilisateur actuel :
whoami
echo.
echo Liste des utilisateurs :
net user
echo.
echo Liste des processus :
tasklist /FI "STATUS eq running"

echo [%date% %time%] Admin tools >> "%LOGFILE%"
pause
goto menu

:: ===============================
:repair
cls
color 0C
echo ===== REPARATION WINDOWS =====
echo Lancement SFC (System File Checker)...
sfc /scannow

echo.
echo Lancement DISM (Deployment Image Servicing and Management)...
DISM /Online /Cleanup-Image /RestoreHealth

echo [%date% %time%] Repair system >> "%LOGFILE%"
pause
goto menu

:: ===============================
:power
cls
color 0C
echo ===== GESTION ENERGIE =====
echo  [1] Redemarrer
echo  [2] Arreter
echo  [3] Retour
set "pwr="
set /p pwr=👉 Choisissez une option :

if "%pwr%"=="1" shutdown /r /t 5
if "%pwr%"=="2" shutdown /s /t 5
if "%pwr%"=="3" goto menu

goto power

:: ===============================
:info
cls
color 0A
echo ===== INFORMATIONS PC =====
systeminfo
wmic cpu get name
wmic os get caption
wmic memorychip get capacity

echo [%date% %time%] Info PC >> "%LOGFILE%"
pause
goto menu
