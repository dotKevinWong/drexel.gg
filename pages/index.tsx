import Head from 'next/head'

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://discord.gg/invite/zeWWhUF',
      permanent: false,
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>drexel.gg</title>
        <meta name="description" content="The invite service built by the Drexel Discord community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      </div>
    </>
  )
}
