// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  h4x0rz: require("../assets/h4x0rz.jpg"),
  matrixxx: require("../assets/matrixxx.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgImage={images.matrixxx.replace("/", "")}>
            <Heading size={1} fit caps>
              Deepsec 2016
            </Heading>
            <Image src={images.h4x0rz.replace("/", "")} margin="10px auto 40px" height="400px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "80px", "margin-top": 0}}>
              Of Mice and Keyboards
            </Heading>
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              On the Security of Modern Wireless Desktop Sets
            </Heading>
            <List>
              <ListItem>Wireless mouse and keyboard, USB dongle</ListItem>
              <ListItem>AES encrypted</ListItem>
              <ListItem>Radio based</ListItem>
              <ListItem>Vulnerable to remote attacks</ListItem>
            </List>
            <Appear>
              <p>
                SySS GmbH research consisted in discovering vulnerabilities in keyboard brands such as Microsoft, Cherry, Logitech, and perix.
              </p>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              Two attack vectors
            </Heading>
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              Insecure hardware and communication
            </Heading>
            <List>
              <ListItem>One time physical access to components</ListItem>
              <ListItem>Cryptographic keys extraction</ListItem>
              <ListItem>Firmware manipulation</ListItem>
              <ListItem>Dangerous for batch orders handled by proxies</ListItem>
            </List>
            <List>
              <ListItem>Insecure implementations of AES</ListItem>
              <ListItem>Remote exploitation via radio communication</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              Results
            </Heading>
            <List>
              <ListItem>Mouse spoofing, replay or keystroke injection attacks</ListItem>
              <ListItem>No modern set without vulnerabilities</ListItem>
            </List>
            <Appear>
              <Link target="_blank" href="https://youtu.be/PkR8EODee44?t=36s">
                UNENCRYPTED && UNAUTHENTICATED mouse communication<br />
                Mouse looking for graphycal keyboard luv {'<'}3 <br />
                Download and execute via Powershell OMG
              </Link>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "80px", "margin-top": 0}}>
              The Perfect Door and The Ideal Padlock
            </Heading>
            <List>
              <ListItem>Physical security</ListItem>
              <ListItem>Pentesting = breaking into buildings and rooms</ListItem>
            </List>
            <List>
              <ListItem>Buy expensive padlocks</ListItem>
              <ListItem>All gaps exploitable</ListItem>
              <ListItem>90 degree handles BAD!</ListItem>
            </List>
            <Appear>
              <Link target="_blank" href="https://www.youtube.com/watch?v=SDl4AO4ancI">
                Breaking into a bank with whiskey by exploting gap and temperature sensor WHAT
              </Link>
            </Appear>
            <br />
            <Appear>
              <Link target="_blank" href="http://deviating.net/lockpicking">
                Lotsa stuff about lockpicking!!!!11
              </Link>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "80px", "margin-top": 0}}>
              Inside Stegosploit
            </Heading>
            <List>
              <ListItem>Browser exploit through image files</ListItem>
              <ListItem>Steganography + Polyglots - HTML/JS + Image</ListItem>
              <ListItem>Undetectable payloads</ListItem>
            </List>
            <Appear>
              <p>
                Even parsers on trusted websites could not prevent from uploading stegosploits since parsing HTML tags will give a lot of false positives.
              </p>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              To create and distribute my Stegosploit I need:
            </Heading>
            <List>
              <ListItem>Minimised version of exploit script (<Link href="https://www.exploit-db.com/exploits/33860/">ideas</Link>)</ListItem>
              <ListItem>Image</ListItem>
              <ListItem>Stegosploit toolset</ListItem>
              <ListItem>A website</ListItem>
              <ListItem>Social engineering</ListItem>
            </List>
            <Appear>
              <p>
                The stegosploit toolset uses HTML5 CANVAS for image analysis and is distributed as a PNG polyglot within the <Link target="_blank" href="https://www.alchemistowl.org/pocorgtfo/pocorgtfo08.pdf">PoC||GTFO PDF</Link>, which is also a polyglot {'<'}3
              </p>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "80px", "margin-top": 0}}>
              CSP is dead,<br />long live strict CSP
            </Heading>
            <List>
              <ListItem>Web platform mechanism to mitigate XSS</ListItem>
              <ListItem>No inline scripts</ListItem>
              <ListItem>Only trusted domains for extenal script sources</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              BUT... most of such policies on the internet are still bypassable!
            </Heading>
            <List>
              <ListItem>Subtle policy misconfigurations</ListItem>
              <ListItem>Origins with unsafe endpoints in script-src whitelist</ListItem>
            </List>
            <Appear>
              <p>
                A secure whitelist for a complex application is infeasible in practice!
              </p>
            </Appear>
            <Appear>
              <Link href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45542.pdf">And here is the entire research paper telling you why and how and what to do about it!</Link>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              New proposal!
            </Heading>
            <List>
              <ListItem>Approach based on nonces and hashes</ListItem>
              <ListItem>Already defined by CSP specification</ListItem>
              <ListItem>Available in major browser implementations</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              How does it work?
            </Heading>
            <List>
              <ListItem>Similarly to a CSRF token</ListItem>
              <ListItem>Singleuse unguessable token generated by application</ListItem>
              <ListItem>Token delivered in CSP policy</ListItem>
              <ListItem>Token attached as HTML attribute of legitimate scripts</ListItem>
              <ListItem>Execution allowed ONLY if nonces match</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="#d0c9cc">
            <Heading style={{"color": "#f263ab", "font-size": "40px"}}>
              Propagation of trust for dynamically loaded scripts
            </Heading>
            <List>
              <ListItem>New CSP source expression called 'strict dynamic'</ListItem>
              <ListItem>Scripts inherit nonce from trusted parent scripts</ListItem>
              <ListItem>One single policy for all apps!</ListItem>
            </List>
            <Appear>
              <CodePane
                source={require("raw!../assets/csp.example")}
                margin="20px auto" />
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
