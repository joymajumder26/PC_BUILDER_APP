import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const motherboard = () => {
    return (
        <div>
            <h1>This is motherboard page</h1>
        </div>
    );
};

export default motherboard;

motherboard.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };