import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const cpu = () => {
    return (
        <div>
            <h1>This is cpu page</h1>
        </div>
    );
};

export default cpu;

cpu.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  