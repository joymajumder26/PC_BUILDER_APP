import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const ram = () => {
    return (
        <div>
            <h1>this is ram page</h1>
        </div>
    );
};

export default ram;

ram.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };