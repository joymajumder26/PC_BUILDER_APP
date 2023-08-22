import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import React from 'react';

const PcBuilderPage = () => {
    return (
       <>
       <Head>
       <title>PC Builder Page</title>
       </Head>
        <div>
            This is pcBuilder Page
        </div>
       </>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};