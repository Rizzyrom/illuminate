interface MaintenancePageProps {
  data: {
    site: {
      title: string;
      maintenanceMessage: string;
      maintenanceReturnDate: string;
    };
  };
}

export default function MaintenancePage({ data }: MaintenancePageProps) {
  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return 'Soon';
      const date = new Date(dateString);
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return 'Soon';
      }
      
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    } catch (error) {
      console.error('Date parsing error:', error);
      return 'Soon';
    }
  };

  return (
    <div className="maintenance-page">
      <div className="maintenance-logo">
        Illuminate Avenue
      </div>
      <h1 className="maintenance-title">
        Under Maintenance
      </h1>
      <p className="maintenance-message">
        {data.site.maintenanceMessage}
      </p>
      <div className="maintenance-date">
        Expected return: {formatDate(data.site.maintenanceReturnDate)}
      </div>
    </div>
  );
}