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