import SingleApp from "./Assets/images/single-app-kios-image.webp";
import MultiApp from "./Assets/images/multi-app-kiosk-image.webp";
import WebBase from "./Assets/images/web-based-kiosk-image.webp";
import Digital from "./Assets/images/digital-signage-kiosk-image.webp";
import Assam from "./Assets/images/asam-kiosk-image.webp";
import DetailsImage from "./Assets/images/effortless.webp";
import Customized from "./Assets/images/interface.webp";
import Power from "./Assets/images/power.webp";
import Secure from "./Assets/images/secure.webp";
import Easy from "./Assets/images/easy.webp";
import Robinson from "./Assets/images/chris-robinson.webp";
import Modrak from "./Assets/images/justin-modrak.webp";
import Dailbor from "./Assets/images/dalibor-kruljac.webp";
import Costco from "./Assets/images/company/costco.svg";
import Group1 from "./Assets/images/company/group1-automotive.webp";
import Hilit0n from "./Assets/images/company/hilton.svg";
import Lowes from "./Assets/images/company/lowes.svg";
import Marriott from "./Assets/images/company/marriott-intl.svg";
import Merck from "./Assets/images/company/merck.svg";
import Polaris from "./Assets/images/company/polaris.svg";
import Saic from "./Assets/images/company/saic.svg";
import Wolt from "./Assets/images/company/wolt.svg";

import Amazon from "./Assets/images/supports/amazon-fire.webp";
import AndroidTv from "./Assets/images/supports/android-tv.svg";
import Android from "./Assets/images/supports/android.svg";
import Apple from "./Assets/images/supports/apple-tv.svg";
import Ios from "./Assets/images/supports/ios.svg";
import Windows from "./Assets/images/supports/windows.svg";

import chrome from "./Assets/images/chrome.jpg";
import microsoft from "./Assets/images/MicrosoftTeams-image (43).png";
import pengin from "./Assets/images/pengin.jpg";
import system from "./Assets/images/system.jpg";
import AppleChat from "./Assets/images/apple.jpg";

export const tabs = [
  {
    id: 1,
    title: "Single App Kiosk",
    subTitle: "Powerful Single-App Kiosk solutions for enhanced control",
    content: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
    image: SingleApp,
  },
  {
    id: 2,
    title: "Multi-App Kiosk",
    subTitle: "Elevate efficiency with Multi-App Kiosk",
    content: [
      "Limit device access to approved apps, ensuring focus and productivity.",
      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
    image: MultiApp,
  },
  {
    id: 3,
    title: "Web-based Kiosk",
    subTitle: "Explore the new way to manage web apps and websites",
    content: [
      "Let users access essential and approved web apps, websites, and files only.",
      "Make the best use of website kiosk with Hexnode's advanced settings.",
      "Tailor your experience to match your unique use case.",
      "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
    ],
    image: WebBase,
  },
  {
    id: 4,
    title: "Digital Signages",
    subTitle: "Capture attention with Digital Signage Kiosks",
    content: [
      "Transform your devices into captivating digital signage kiosks that grab attention.",
      "Engage your audience with vibrant images and seamless video streaming.",
      "Customize media files with trimming, muting, and background music.",
      "Advertise and show off your brand aesthetics to attract customers in different ways.",
      "Take control with Hexnode to reestablish your brand's presence.",
    ],
    image: Digital,
  },
  {
    id: 5,
    title: "ASAM Kiosk",
    subTitle: "Unlock the power of Autonomous Single App Mode (ASAM)",
    content: [
      "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
      "Create focused, efficient, and secure digital environments to match your requirements.",
      "Configure ASAM effortlessly and elevate your user experience like never before.",
    ],
    image: Assam,
  },
];
export const details = [
  {
    title: "Effortless kiosk deployment & management",
    image: DetailsImage,
    description:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
  },
  {
    title: "Customized interface for brand visibility",
    image: Customized,
    description:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
  },
  {
    title: "What more can you do with Hexnode kiosk?",
    image: Power,
    description:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
  },
  {
    title: "Secure and update your app ecosystem",
    image: Secure,
    description:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    image: Easy,
    description:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
  },
];

export const cardsData = [
  {
    image: Modrak,
    title: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    company: "Technology Coordinator",
  },
  {
    image: Dailbor,
    title:
      "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
  },
  {
    image: Robinson,
    title: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    company: "Executive Account Manager, NCS",
  },
];
export const companyImages = [
  Costco,
  Group1,
  Hilit0n,
  Lowes,
  Marriott,
  Merck,
  Polaris,
  Saic,
  Wolt,
];
export const supportedImages = [
  Android,
  Windows,
  Ios,
  AndroidTv,
  Apple,
  Amazon,
];
export const chatData = [
  {
    type: "Apple",
    heading: "Elevate your device management with VisionOS support!",
    text: "We’re thrilled to announce the launch of VisionOS support in Hexnode!",
    image: AppleChat,
  },
  {
    type: "Desktop",
    heading: "Expanding capabilities: ChromeOS support is here!",
    text: "We’re excited to announce the launch of ChromeOS support in Hexnode!",
    image: chrome,
  },
  {
    type: "Desktop",
    heading: "Introducing Linux management with Hexnode",
    text: "We are excited to announce that Hexnode now supports Linux management!",
    image: pengin,
  },
  {
    type: "Desktop",
    heading: "Introducing Custom Reports. Your data, your way!e",
    text: "We are thrilled to introduce Custom Reports in Hexnode!",
    image: system,
  },
  {
    type: "Update",
    heading: "Say hello to the revamped Hexnode Connect!",
    text: "We're excited to announce some major additions to Hexnode Connect, your go-to hub for all things Hexnode.",
    image: microsoft,
  },{
    type: "Desktop",
    heading: "Expanding capabilities: ChromeOS support is here!",
    text: "We’re excited to announce the launch of ChromeOS support in Hexnode!",
    image: chrome,
  },
  {
    type: "Desktop",
    heading: "Introducing Linux management with Hexnode",
    text: "We are excited to announce that Hexnode now supports Linux management!",
    image: pengin,
  },
];
