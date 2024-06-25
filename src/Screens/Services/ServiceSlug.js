import { RichText } from "@graphcms/rich-text-react-renderer";
import { gql, GraphQLClient } from "graphql-request";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import PELoader from "../Utils/PELoader";
import { Helmet } from "react-helmet";

const graphcms = new GraphQLClient(`${process.env.REACT_APP_GRAPH_API_KEY}`);

const QUERY = gql`
  query Service($slug: String!) {
    service(where: { slug: $slug }) {
      id
      title
      slug
      metaTitle
      metaDescription
      content {
        raw
      }
    }
  }
`;

function ServiceSlug() {
  const { slug } = useParams();
  const [postData, setPostData] = useState();
  const variables = {
    slug: slug,
  };
  useEffect(() => {
    const getService = async () => {
      const data = await graphcms.request(QUERY, variables);
      setPostData(data);
    };
    getService();
  }, [slug]);

  useEffect(() => {
    console.log(postData);
  }, [postData, slug]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log( );
  return (
    <>
      {postData ? <Helmet>
        <meta name="description" content="Helmet application" />
        <meta charSet="utf-8" />
        <title>{postData.service.metaTitle}</title>
        <meta name="description" content={postData.service.metaDescription} />
        <meta name="title" content={postData.service.metaTitle} />

      </Helmet> : <></>}
      <Header />
      {postData ? (
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div>
                <div
                  className="breadcrumb__area breadcrumb__plr breadcrumb__space breadcrumb__bg breadcrumb__overlay p-relative fix"
                  data-background="assets/img/slider/slider-bg-3.png"
                >
                  <div className="breadcrumb__big-text d-none d-lg-block">
                    <h2>Settle Loans</h2>
                  </div>
                  <div className="container-fluid">
                    <div className="row items-center justify-center">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="breadcrumb__content z-index">
                          <h3
                            className="breadcrumb__title char-anim wow tpfadeUp row items-center justify-center "
                            data-wow-duration=".9s"
                            data-wow-delay=".3s"
                          >
                            {postData.service && postData.service.title}
                          </h3>
                        </div>
                      </div>
                      {/* <div
                        className="col-xxl-6 col-xl-6 col-lg-6 wow tpfadeRight"
                        data-wow-duration=".9s"
                        data-wow-delay=".9s"
                      > */}
                        {/* <div className="breadcrumb__main-img text-end">
                          <img
                            src={
                              postData.service.coverPhoto
                                ? postData.service.coverPhoto.url
                                : "something"
                            }
                            alt=""
                          /> */}
                        {/* </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className="service-details__area service-details__plr mb-30">
                  <div className="container-fluid">
                    {postData.service && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: postData.service.content.html,
                        }}
                      ></div>
                    )}

                    {postData.service.content && (
                      <RichText
                        content={postData.service.content.raw.children}
                        renderers={{
                          h1: ({ children }) => (
                            <h1 className="text-stone-700">{children}</h1>
                          ),
                          bold: ({ children }) => <strong>{children}</strong>,
                          li: ({ children }) => (
                            <li className="py-1">
                              <i className="fal fa-check-square p-1 text-indigo-600" />
                              {children}
                            </li>
                          ),
                        }}
                      />
                    )}
                    {/* <RichText content={postData.service.content} /> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <>
          <PELoader />
        </>
      )}
    </>
  );
}

export default ServiceSlug;
