import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const others = () => {
    return (
        <div>
            <h1>This is Others page</h1>
        </div>
    );
};

export default others;

others.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };