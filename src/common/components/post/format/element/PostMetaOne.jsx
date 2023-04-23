import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../utils";

const PostMetaOne = ({ metaData, content }) => {
  return (
    <article
      className="banner banner-single-post post-formate post-standard alignwide"
      itemType="http://schema.org/Article"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Start Single Slide  */}
            <div className="content-block">
              {/* Start Post Thumbnail  */}
              <figure
                className="post-thumbnail"
                itemProp="image"
                itemScope
                itemType="http://schema.org/ImageObject"
              >
                <Image
                  src={metaData.featureImg}
                  alt={metaData.title}
                  height={720}
                  width={1440}
                  itemProp="contentUrl"
                />
                <meta itemProp="width" content="1440" />
                <meta itemProp="height" content="720" />
              </figure>
              {/* End Post Thumbnail  */}
              {/* Start Post Content  */}
              <div
                className="post-content"
                itemScope
                itemType="http://schema.org/Text"
              >
                <div className="post-cat">
                  <div className="post-cat-list">
                    <Link href={`/category/${slugify(metaData.cate)}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item" itemProp="about">
                          <span data-text={metaData.cate}>{metaData.cate}</span>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                <h1
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="title"
                  itemProp="headline"
                >
                  {metaData.title}
                </h1>
                {/* Post Meta  */}
                <div
                  className="post-meta-wrapper"
                  itemScope
                  itemType="http://schema.org/Person"
                >
                  <div className="post-meta">
                    <div
                      className="post-author-avatar border-rounded"
                      itemProp="image"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    >
                      <Image
                        src={metaData.author_img}
                        alt={metaData.author_name}
                        height={50}
                        width={50}
                        itemProp="contentUrl"
                      />
                      <meta itemProp="width" content="50" />
                      <meta itemProp="height" content="50" />
                    </div>
                    <div className="content">
                      <h6 className="post-author-name" itemProp="name">
                        <Link href={`/author/${slugify(metaData.author_name)}`}>
                          <a className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={metaData.author_name}>
                                {metaData.author_name}
                              </span>
                            </span>
                          </a>
                        </Link>
                      </h6>
                      <ul className="post-meta-list">
                        <li itemProp="datePublished">{metaData.date}</li>
                        <li
                          itemProp="interactionStatistic"
                          itemScope
                          itemType="http://schema.org/InteractionCounter"
                        >
                          <meta
                            itemProp="interactionType"
                            content="http://schema.org/ViewAction"
                          />
                          <meta
                            itemProp="userInteractionCount"
                            content={metaData.post_views}
                          />
                          {metaData.post_views} views
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul
                    className="social-share-transparent justify-content-end"
                    itemProp="sameAs"
                  >
                    {metaData.author_social.map((social) => (
                      <li key={social.url}>
                        <a href={social.url}>
                          <i className={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End Post Content  */}
            </div>
            {/* End Single Slide  */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostMetaOne;
