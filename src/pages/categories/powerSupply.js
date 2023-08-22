import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const powerSupply = () => {
    return (
        <div>
            <h1>This is powerSupply page</h1>
        </div>
    );
};

export default powerSupply;

powerSupply.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };