"use client";

import { useEffect } from 'react';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export default function AzureAnalytics() {
    useEffect(() => {
        const appInsights = new ApplicationInsights({
            config: {
                connectionString: 'InstrumentationKey=ba101f25-6204-4082-9202-081431344373;IngestionEndpoint=https://canadacentral-1.in.applicationinsights.azure.com/;LiveEndpoint=https://canadacentral.livediagnostics.monitor.azure.com/;ApplicationId=d7a078bc-4bd9-4840-a5a9-ce2cdf2af1f8'
            }
        });
        appInsights.loadAppInsights();
        appInsights.trackPageView();
    }, []);

    return null;
}
