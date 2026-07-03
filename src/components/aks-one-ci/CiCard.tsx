/*
 * Copyright © 2026 AKS ONE CI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import React from 'react';
import { cn } from '../../lib/utils';
import { Star, MapPin } from 'lucide-react';

interface CiCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  price?: string;
  rating?: number;
  location?: string;
  badge?: string;
  className?: string;
  onClick?: () => void;
}

export const CiCard: React.FC<CiCardProps> = ({
  title,
  subtitle,
  description,
  image,
  price,
  rating,
  location,
  badge,
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group",
        className
      )}
    >
      <div className="relative h-48 bg-gray-100">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-xl uppercase bg-gradient-to-br from-gray-50 to-gray-200">
            {title.substring(0, 2)}
          </div>
        )}
        {badge && (
          <div className="absolute top-3 left-3 bg-ci-orange text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            {badge}
          </div>
        )}
        {price && (
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-aks-blue font-bold px-3 py-1 rounded-lg shadow-sm">
            {price}
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-gray-900 line-clamp-1">{title}</h3>
            {subtitle && <p className="text-xs text-aks-blue font-medium">{subtitle}</p>}
          </div>
          {rating !== undefined && (
            <div className="flex items-center text-aks-yellow">
              <Star size={14} fill="currentColor" />
              <span className="ml-1 text-xs font-bold text-gray-600">{rating}</span>
            </div>
          )}
        </div>

        {description && (
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        )}

        {location && (
          <div className="flex items-center text-gray-400 text-xs pt-1">
            <MapPin size={12} className="mr-1" />
            {location}
          </div>
        )}
      </div>
    </div>
  );
};
