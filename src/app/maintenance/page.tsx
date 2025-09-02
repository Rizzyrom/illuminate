"use client";
import { useEffect, useState } from 'react';

interface MaintenanceSettings {
  title: string;
  maintenanceMode: boolean;
  maintenanceMessage: string;
  maintenanceReturnDate: string;
}

export default function MaintenancePage() {
  const [settings, setSettings] = useState<MaintenanceSettings>({
    title: "Illuminate Avenue - Strategic Marketing Excellence",
    maintenanceMode: true,
    maintenanceMessage: "We're currently updating our website to serve you better. We'll be back soon with enhanced features and improved user experience.",
    maintenanceReturnDate: "2025-09-30T07:00:00.000Z"
  });

  useEffect(() => {
    // In a real implementation, this would fetch from the CMS API
    // For now, we'll use the default settings
  }, []);
  
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    } catch {
      return 'Soon';
    }
  };

  return (
    <div className="maintenance-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Space+Grotesk:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      
      <div className="maintenance-logo">
        Illuminate Avenue
      </div>
      <h1 className="maintenance-title">
        Under Maintenance
      </h1>
      <p className="maintenance-message">
        {settings.maintenanceMessage}
      </p>
      <div className="maintenance-date">
        Expected return: {formatDate(settings.maintenanceReturnDate)}
      </div>
    </div>
  );
}