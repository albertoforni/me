import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alberto Forni</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"
          rel="stylesheet"
          key="google-fonts"
        />
      </Head>
      <div className="page">
        <h1 className="title">nomo</h1>
        <h2 className="subtitle">not my own</h2>
        <p className="description">
          nomo helps you to track what you lent, borrowed and returned. <br />
          <br />
          Use it for books, clothes, baby’s stuff, games or anything you borrow
          and lend with friends, family or co-workers.
          <br />
          <br />
          Take a picture, add a title, assign someone from your contacts and
          voilà.
          <br />
          <br />
          Save money and the planet by reducing waste, borrow before you buy and
          lend to give things new life.
        </p>
        <Image
          className="image"
          src="/images/dashboard.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h3 id="#support">Support</h3>
        <p>
          if you need help or you would like a new feature, just send an email
          at <a href="mailto:nomo@ahaloop.com">nomo@ahaloop.com</a> and we will
          do our best to help!
        </p>
      </div>
      <div>
        <h3 id="#privacy">Privacy</h3>
        <p>
          We don't collect any kind of information. Everything runs on the
          user's device and stays there!
        </p>
      </div>

      <style jsx>{`
        .page {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            "title title"
            "subtitle subtitle"
            "description image";
        }
        .title {
          grid-area: title;
          text-align: center;
          margin: 0;
        }
        .subtitle {
          grid-area: subtitle;
          text-align: center;
          margin: 0;
        }
        .description {
          grid-area: description;
        }
        .image {
          grid-area: image;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #04226f;
          color: #ffffff;
          font-family: "Open Sans";
          max-width: 1024px;
          margin: 0 auto;
        }
        a,
        a:hover,
        a:visited {
          color: #ffffff;
        }
        p {
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
