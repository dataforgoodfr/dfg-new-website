import * as React from "react"


import Events from "../images/events.jpg";

import Layout from '../components/Layout';
import Marty from "../images/logo-dfg-new.png";
import Lou from "../images/team/lou.jpg";
import Lucile from "../images/team/lucile.jpg";
import Benjamin from "../images/team/benjamin.png";
import Theo from "../images/team/theo.jpg";
import Mickael from "../images/team/mickael.jpg";
import Margaux from "../images/team/margaux.jpg";
import Eloi from "../images/team/eloi.png";
import Fantine from "../images/team/eloi.png";
import Josephine from "../images/team/josephine.jpg";
import Camille from "../images/team/camille.jpg";
import Artur from "../images/team/artur.png";
import Gabriel from "../images/team/gabriel.jpg";
import Adrien from "../images/team/adrien.png";
import Fred from "../images/team/fred.png";
import Martin from "../images/team/martin.png";

var teamsData = [
  {"img":Marty,"name":"Marty","role":"Mascotte"},
  {"img":Lou,"name":"Lou Welgryn","role":"Présidente"},
  {"img":Lucile,"name":"Lucile Ritchie","role":"Coordinatrice"},
  {"img":Benjamin,"name":"Benjamin Rouif","role":"Coordinateur"},
  {"img":Theo,"name":"Théo Alves Da Costa","role":"Coordinateur"},
  {"img":Mickael,"name":"Mickael Fine","role":"Coordinateur"},
  {"img":Margaux,"name":"Margaux David","role":"Designeuse"},
  {"img":Eloi,"name":"Eloi Pérignon","role":"RP / Communication"},
  {"img":Fantine,"name":"Fantine Monot","role":"Communication"},
  {"img":Josephine,"name":"Joséphine Lecoq-Vallon","role":"Communication"},
  {"img":Artur,"name":"Artur Imbert","role":"Vieux sage"},
  {"img":Camille,"name":"Camille Hartmann","role":"Vieux sage"},
  {"img":Gabriel,"name":"Gabriel De Vinzelles","role":"Vieux sage"},
  {"img":Adrien,"name":"Adrien De Montcoudiol","role":"Vieux sage"},
  {"img":Fred,"name":"Frédéric Bardolle","role":"Vieux sage"},
  {"img":Martin,"name":"Martin Daniel","role":"Vieux sage"},
]



const TeamMember = ({img,name,role}) => {
  return (
    <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img}/>
      <div class="flex-grow">
        <h2 class="text-gray-900 title-font font-medium">{name}</h2>
        <p class="text-gray-500">{role}</p>
      </div>
    </div>
  </div>
  )
}


// markup
const IndexPage = () => {
  return (
    <Layout>

      <section class="mt-20 text-gray-600 body-font">
        <div class="container my-10 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-5xl mb-2 text-gray-900">Data For Good</h1>
              <div class="leading-relaxed">Data For Good est une communauté de bénévoles tech (Data Scientists, Engineers, Développeurs, Designers) mettant leurs compétences à profit sur des projets solidaires, éthiques et environnementaux.</div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-blue-700">2500+</h2>
              <p class="leading-relaxed">Bénévoles</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-blue-700">60+</h2>
              <p class="leading-relaxed">Projets</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-blue-700">9</h2>
              <p class="leading-relaxed">Saisons</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-2xl text-blue-700">💪</h2>
              <p class="leading-relaxed">Depuis 2014</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src={Events} alt="stats"/>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Qui sommes nous?
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Notre vision</h2>
                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Notre mission</h2>
                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Nos valeurs</h2>
                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">NOS ACTIONS</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Que faisons-nous?</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Des saisons d'accélération</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Du hors-saison</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Des formations</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Des rencontres</h2>
              <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              <a class="text-blue-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">L'équipe Data For Good</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Rencontrez l'équipe qui fait vivre cette communauté de passionnés au quotidien</p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">👉 Pour nous contacter <a href="mailto:hellodataforgood@gmail.com">hellodataforgood@gmail.com</a></p>
          </div>
          <div class="flex flex-wrap -m-2">
            {teamsData.map(el => (
              TeamMember(el)
            ))}
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
