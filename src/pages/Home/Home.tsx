import React from "react";
import Btn from "../../components/UI/Btn/Btn";
import styles from "./home.module.css";
import Input from "../../components/UI/Input/Input";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.homeTop}>
        <h1 className={styles.homeTopTitle}>
          Many reasons to get up and start to get back in the business
        </h1>
        <p className={styles.homeTopText}>
          The harder you work for something, the greater you’ll feel when you
          achieve it.
        </p>
        <div className={styles.homeTopBtns}>
          <Btn>Learn More</Btn>
          <Btn>Demo</Btn>
        </div>
        <div className={styles.homeTopVideoWrap}>
          <video src="video.mp4" className={styles.video}></video>
          <div className={styles.videoTextWrap}>
            <p className={styles.videoText}>
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>
            <a href="video.mp4" className={styles.videoPreview}>
              Watch preview
            </a>
          </div>
        </div>
      </section>

      <section className={styles.logosSection}>
        <a href="https://www.profitwell.com/" className={styles.logoLink}>
          <img src="logo-1.svg" alt="" className={styles.logo} />
        </a>

        <a href="https://www.appcues.com/" className={styles.logoLink}>
          <img src="logo-2.svg" alt="" className={styles.logo} />
        </a>

        <a href="https://www.shipbob.com/" className={styles.logoLink}>
          <img src="logo-3.svg" alt="" className={styles.logo} />
        </a>

        <a href="https://www.bench.com/" className={styles.logoLink}>
          <img src="logo-4.svg" alt="" className={styles.logo} />
        </a>

        <a href="https://www.subbly.co" className={styles.logoLink}>
          <img src="logo-5.svg" alt="" className={styles.logo} />
        </a>

        <a href="https://www.demio.com" className={styles.logoLink}>
          <img src="logo-6.svg" alt="" className={styles.logo} />
        </a>
      </section>

      <section className={styles.textSection}>
        <h2 className={styles.textSecTitle}>Your choice</h2>
        <h4 className={styles.textSecSubtitle}>
          There are many reasons to get down and start to get depressed about
          your situation.
        </h4>

        <div className={styles.textSecMain}>
          <div className={styles.textSecBlock}>
            <div className={styles.textSecBlockIconWrap}>
              <img src="svg-1.svg" alt="" className={styles.textSecBlockIcon} />
            </div>

            <div className={styles.textSecBlockMain}>
              <h3 className={styles.textSecBlockTitle}>Ecstatic elegance</h3>
              <h3 className={styles.textSecBlockText}>
                Article nor prepare chicken you him now. Shy merits say advice
                ten before lovers innate add.
              </h3>
            </div>
          </div>

          <div className={styles.textSecBlock}>
            <div className={styles.textSecBlockIconWrap}>
              <img src="svg-2.svg" alt="" className={styles.textSecBlockIcon} />
            </div>

            <div className={styles.textSecBlockMain}>
              <h3 className={styles.textSecBlockTitle}>Folly words widow</h3>
              <h3 className={styles.textSecBlockText}>
                Effect if in up no depend seemed. Ecstatic elegance gay but
                disposed. We me rent been part what.
              </h3>
            </div>
          </div>

          <div className={styles.textSecBlock}>
            <div className={styles.textSecBlockIconWrap}>
              <img src="svg-3.svg" alt="" className={styles.textSecBlockIcon} />
            </div>

            <div className={styles.textSecBlockMain}>
              <h3 className={styles.textSecBlockTitle}>
                Possible procured trifling
              </h3>
              <h3 className={styles.textSecBlockText}>
                We me rent been part what. An concluded sportsman offending so
                provision mr education.
              </h3>
            </div>
          </div>

          <div className={styles.textSecBlock}>
            <div className={styles.textSecBlockIconWrap}>
              <img src="svg-4.svg" alt="" className={styles.textSecBlockIcon} />
            </div>

            <div className={styles.textSecBlockMain}>
              <h3 className={styles.textSecBlockTitle}>Open game</h3>
              <h3 className={styles.textSecBlockText}>
                Shy merits say advice ten before lovers innate add. She
                cordially behaviour can attempted estimable.
              </h3>
            </div>
          </div>

          <div className={styles.textSecBlock}>
            <div className={styles.textSecBlockIconWrap}>
              <img src="svg-5.svg" alt="" className={styles.textSecBlockIcon} />
            </div>

            <div className={styles.textSecBlockMain}>
              <h3 className={styles.textSecBlockTitle}>Endeavor</h3>
              <h3 className={styles.textSecBlockText}>
                Improve ashamed married expense bed her comfort pursuit mrs.
                Four time took ye your as fail lady.
              </h3>
            </div>
          </div>

          <div className={styles.textSecBlock}>
            <div className={styles.textSecBlockIconWrap}>
              <img src="svg-6.svg" alt="" className={styles.textSecBlockIcon} />
            </div>

            <div className={styles.textSecBlockMain}>
              <h3 className={styles.textSecBlockTitle}>Comfort pursuit</h3>
              <h3 className={styles.textSecBlockText}>
                Had denoting properly jointure you occasion directly raillery.
                In said to of poor full be post face snug.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewSecText}>
          <h2 className={styles.overviewTitle}>
            Increase your business
            <span className={styles.textOrange}> traffic</span>
          </h2>
          <p className={styles.overviewText}>
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>

          <Btn>Learn More</Btn>
        </div>
        <div className={styles.overviewSecImgWrap}>
          <img
            src="overview-img.png"
            alt=""
            className={styles.overviewSecImg}
          />
        </div>
      </section>

      <section className={styles.descSection}>
        <h2 className={styles.descTitle}>
          3 Simple Ways To <span className={styles.textOrange}> Save </span> A
          Bunch <br /> Of <span className={styles.textOrange}> Money </span>
          When Buying A New Computer
        </h2>

        <p className={styles.descText}>
          Fully customizable and neatly organized components <br /> will help
          you work faster without limiting creative freedom.
        </p>

        <div className={styles.descMain}>
          <div className={styles.descMainBlock}>
            <h3 className={styles.descMainBlockTitle}>100+</h3>
            <p className={styles.descMainBlockText}>
              5 Reasons To Purchase <br /> Desktop Computers
            </p>
          </div>

          <div className={styles.descMainBlock}>
            <h3 className={styles.descMainBlockTitle}>43,000+</h3>
            <p className={styles.descMainBlockText}>
              3 Simple Ways To Save A Bunch Of Money When Buying A New Computer
            </p>
          </div>

          <div className={styles.descMainBlock}>
            <h3 className={styles.descMainBlockTitle}>30+</h3>
            <p className={styles.descMainBlockText}>
              A Discount Toner Cartridge <br /> Is Better Than Ever And You
              <br /> Will Save 50 Or More
            </p>
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection}>
        <h2 className={styles.getStartedTitle}>
          Create your <span className={styles.textOrange}> next project </span>
          with startup framework Get Started
        </h2>

        <Btn>Get Started</Btn>
      </section>

      <section className={styles.investSection}>
        <div className={styles.investMain}>
          <h2 className={styles.investTitle}>
            Invest property for better{" "}
            <span className={styles.textOrange}>business</span>
          </h2>

          <p className={styles.investText}>
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
          </p>

          <Btn secondClass={styles.investBtn}>Learn More</Btn>
        </div>

        <div className={styles.investImgWrap}>
          <img src="invest-img.png" alt="" className={styles.investImg} />
        </div>
      </section>

      <section className={styles.featureSection}>
        <div className={styles.featureImgWrap}>
          <img src="feature-img.png" alt="" className={styles.featureImg} />
        </div>
        <div className={styles.featureMainWrap}>
          <h3 className={styles.featureTitle}>
            Help Finding Information Online
          </h3>
          <p className={styles.featureText}>
            Fully customizable and neatly organized components will help you
            work faster without limiting creative freedom.
          </p>
          <div className={styles.featureMain}>
            <div className={styles.featureBlockOne}>
              <img
                src="feature-icon-1.svg"
                alt=""
                className={styles.featureIcon}
              />
              <h4 className={styles.featureBlockTitle}>Feature One</h4>
              <p className={styles.featureBlockText}>
                Fully customizable and neatly organized components will help you
                work faster
              </p>
            </div>

            <div className={styles.featureBlockTwo}>
              <img
                src="feature-icon-2.svg"
                alt=""
                className={styles.featureIcon}
              />
              <h4 className={styles.featureBlockTitle}>Feature Two</h4>
              <p className={styles.featureBlockText}>
                Fully customizable and neatly organized components will help you
                work faster
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.emailSection}>
        <div className={styles.emailMain}>
          <h2 className={styles.emailTitle}>
            There are many reasons to get down
          </h2>
          <p className={styles.emailText}>
            There are many reasons to get down and start to get depressed about
            your situation.
          </p>

          <form className={styles.emailForm}>
            <Input
              type="email"
              pText="Your Email"
              secondClass={styles.emailInput}
              lbr={true}
            />

            <Btn rbr={true}>Send</Btn>
          </form>

          <p className={styles.emailPrompt}>
            No spam. Only releases, updates and discounts
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
