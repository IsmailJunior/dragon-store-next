import { useRouter } from "next/router";
import Container from "@/components/ui/Container";
import ToggleList from "@/components/footer/ToogleList";
import ListWraper from "@/components/footer/ListWraper";
import Breadcrumb from "@/components/footer/Breadcrumb";
function FooterBar() {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="text-slate-500 font-light text-xs mt-16">
      <Container>
        <section className="pb-3 border-b">
          <ul className="space-y-5">
            <li>
              <p>
                1. Qualified Purchasers receive an Apple Gift Card when they
                purchase an eligible Mac or iPad at a Qualifying Location. Only
                one Promotion Product per eligible Mac or eligible iPad per
                Qualified Purchaser. Offer subject to availability. While
                supplies last. View full terms and conditions of offer here.
              </p>
            </li>
            <li>
              <p>
                2. Trade-in values will vary based on the condition, year, and
                configuration of your eligible trade-in device. Not all devices
                are eligible for credit. You must be at least 18 years old to be
                eligible to trade in for credit or for an Apple Gift Card.
                Trade-in value may be applied toward qualifying new device
                purchase, or added to an Apple Gift Card. Actual value awarded
                is based on receipt of a qualifying device matching the
                description provided when estimate was made. Sales tax may be
                assessed on full value of a new device purchase. In-store
                trade-in requires presentation of a valid photo ID (local law
                may require saving this information). Offer may not be available
                in all stores, and may vary between in-store and online
                trade-in. Some stores may have additional requirements. Apple or
                its trade-in partners reserve the right to refuse or limit
                quantity of any trade-in transaction for any reason. More
                details are available from Apple’s trade-in partner for trade-in
                and recycling of eligible devices. Restrictions and limitations
                may apply.
              </p>
            </li>
            <li>
              <p>
                To access and use all Apple Card features and products available
                only to Apple Card users, you must add Apple Card to Wallet on
                an iPhone or iPad that supports and has the latest version of
                iOS or iPadOS. Apple Card is subject to credit approval,
                available only for qualifying applicants in the United States,
                and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              </p>
            </li>
            <li>
              <p>
                If you reside in the U.S. territories, please call Goldman Sachs
                at 877-255-5923 with questions about Apple Card.
              </p>
            </li>
            <li>
              <p>
                Learn more about how Apple Card applications are evaluated at
                support.apple.com/kb/HT209218.
              </p>
            </li>
            <li>
              <p>A subscription is required for Apple TV+.</p>
            </li>
          </ul>
        </section>
        <section>
          {pathname !== "/" ? <Breadcrumb /> : null}
          <nav className="flex flex-col gap-2 relative pointer-events-auto md:flex-row flex-nowrap py-2">
            <ListWraper>
              <ToggleList title="تسوق وتعلم">
                <li>المتجر</li>
                <li>سامسونك</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Vision</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ToggleList>
              <ToggleList title="Apple Wallet">
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
              </ToggleList>
            </ListWraper>
            <ListWraper>
              <ToggleList title="Account">
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ToggleList>
              <ToggleList title="Entertainment">
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>App Store</li>
              </ToggleList>
            </ListWraper>
            <ListWraper>
              <ToggleList title="Apple Store">
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </ToggleList>
            </ListWraper>
            <ListWraper>
              <ToggleList title="For Business">
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ToggleList>
              <ToggleList title="For Education">
                <li>Apple and Education</li>
                <li>Shop for k-12</li>
                <li>Shop for Collage</li>
              </ToggleList>
              <ToggleList title="For Healthcare">
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone</li>
              </ToggleList>
              <ToggleList title="For Government">
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ToggleList>
            </ListWraper>
            <ListWraper>
              <ToggleList title="Apple Values">
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supplier Responsibility</li>
              </ToggleList>
              <ToggleList title="About Apple">
                <li>Newsroom</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ToggleList>
            </ListWraper>
          </nav>
        </section>
      </Container>
    </div>
  );
}

export default FooterBar;
