import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { RootState } from '@/store/store';

const NotFound = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.auth.user !== null);

    const handleBack = () => {
        if (isLoggedIn) {
            navigate('/');
        } else {
            navigate('/library/login');
        }
    };

    return (
        <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center ">
            <h2 className="text-[128px]">404 NotFound</h2>
            <p>No routes matched location </p>
            <Button onClick={handleBack}>Go Back</Button>
        </div>
    );
};

export default NotFound;
