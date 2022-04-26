import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>Service Deatail: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;