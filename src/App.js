import React from 'react'

import {
    CodePane,
    CodeSpan,
    Deck,
    FlexBox,
    FullScreen,
    Heading,
    Image,
    ListItem,
    Notes,
    Progress,
    Quote,
    Slide,
    Text,
    UnorderedList
} from 'spectacle'

// SPECTACLE_CLI_THEME_START
const theme = {
    fonts: {
        header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
        text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
    },
    colors: {
        primary: 'black',
        secondary: '#FB5252',
        tertiary: '#000000',
        quaternary: 'white',
        quinary: '#9d4f10',
    },
    fontSizes: {
        header: '64px',
        text: '42px',
        code: '38px',
        tiny: '24px',
    },
    size: {
        maxCodePaneHeight: 450,
    },
    space: {
        none: 0,
        tiny: 6,
    },
}
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
    <FlexBox>
        <FlexBox position="absolute" alignItems="center" bottom={0} width={1}>
            <Progress/>
        </FlexBox>
        <FlexBox position="absolute" right={0} bottom={0}>
            <FullScreen/>
        </FlexBox>
    </FlexBox>
)
// SPECTACLE_CLI_TEMPLATE_END

const App = () => (
    <Deck theme={theme} template={template} transitionEffect="fade">
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Image width={100} src={`${process.env.PUBLIC_URL}/images/poule0.png`}/>
                <Heading fontSize={120}>PURE TESTS</Heading>
                <Text color="quaternary">WITH</Text>
                <Image width={300} src={`${process.env.PUBLIC_URL}/images/cypress-logo.png`}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Image width="100" src={`${process.env.PUBLIC_URL}/images/untemps-logo.png`}/>
                <Heading>VINCENT LE BADEZET</Heading>
                <Heading color="quaternary" fontSize={40}>LEAD FRONT-END / LA JAVANESS</Heading>
                <CodeSpan color="quaternary">@untemps</CodeSpan>
            </FlexBox>
        </Slide>
        <Slide backgroundImage={`url(${process.env.PUBLIC_URL}/images/poule1.jpg)`} backgroundOpacity={0.2}>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Heading>TESTS FONCTIONNELS ?</Heading>
            </FlexBox>
        </Slide>
        <Slide backgroundColor="secondary">
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading color="quaternary">PYRAMIDE DES TESTS AUTOMATISÉS</Heading>
                <Image width={600} src={`${process.env.PUBLIC_URL}/images/tests-pyramid.png`}/>
            </FlexBox>
            <Notes>
                <h4>Types de test :</h4>
                <ul>
                    <li>Unitaires (unité de code)</li>
                    <li>Intégration (composition d’unités de code)</li>
                    <li>Fonctionnels (e2e ou UI) (à la place de l’utilisateur)</li>
                </ul>
                <Text>Mike Cohn</Text>
                <Quote>Source: https://willowtreeapps.com</Quote>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>AVANTAGES</Heading>
                <UnorderedList height="100%">
                    <ListItem color="quaternary">Obligent à penser côté utilisateur</ListItem>
                    <ListItem color="quaternary">Réduisent les risques d'erreur</ListItem>
                    <ListItem color="quaternary">Garantissent le fonctionnement</ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>INCONVÉNIENTS</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Coûtent cher</ListItem>
                    <ListItem color="quaternary">Ralentissent le build</ListItem>
                    <ListItem color="quaternary">Rendent le debug compliqué</ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>FRAMEWORKS EXISTANTS</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Test Café</ListItem>
                    <ListItem color="quaternary">Puppeteer</ListItem>
                    <ListItem color="quaternary">Protractor</ListItem>
                    <ListItem color="quaternary">Nightwatch</ListItem>
                    <ListItem color="quaternary">Selenium</ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <ul>
                    <li>
                        Selenium : Outil permettant de mettre en place des tâches d’automatisation dans le
                        navigateur écrit en JAVA
                    </li>
                    <li>
                        Selenium Webdriver : Framework de tests permettant d’envoyer des commandes au navigateur
                        et d'en recevoir un résultat
                    </li>
                    <li>Selenium IDE : Extension navigateur permettant de contrôler ses tests</li>
                </ul>
                <ul>
                    <li>Besoin d’installer de multiples outils avec des niveaux de maturité différents</li>
                    <li>API et documentation aléatoires</li>
                    <li>Résultats instables et différents entre la version locale et la version en ligne</li>
                    <li>Lenteur</li>
                    <li>Pas accès, ou avec difficulté, à tous les éléments de l’application</li>
                </ul>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Image width="100%" src={`${process.env.PUBLIC_URL}/images/cypress-before.png`}/>
            </FlexBox>
        </Slide>
        <Slide backgroundImage={`url(${process.env.PUBLIC_URL}/images/poule2.jpg)`} backgroundOpacity={0.2}>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Heading>
                    CYPRESS ?
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Image width="100%" src={`${process.env.PUBLIC_URL}/images/cypress-ws.png`}/>
            </FlexBox>
            <Notes>
                <p>Créé par Brian Mann et Randall Kent en 2015</p>
                <p>v1.0.0 (09/10/2017)</p>
                <p>v3.1.4 (25/12/18)</p>
                <p>v3.1.5 (31/01/19)</p>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="space-between">
                <Image src={`${process.env.PUBLIC_URL}/images/tweet1.png`} width={600}/>
                <Image src={`${process.env.PUBLIC_URL}/images/tweet2.png`} width={600}/>
                <Image src={`${process.env.PUBLIC_URL}/images/tweet3.png`} width={600}/>
                <Image src={`${process.env.PUBLIC_URL}/images/tweet4.png`} width={600}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>
                    CARACTÉRISTIQUES
                </Heading>
                <UnorderedList>
                    <ListItem color="quaternary">En développement actif</ListItem>
                    <ListItem color="quaternary">Agnostique de la techno front</ListItem>
                    <ListItem color="quaternary">Tout-en-un</ListItem>
                    <ListItem color="quaternary">Tests « pures » , dépourvus d’effets de bord</ListItem>
                    <ListItem color="quaternary">Rendu des pages app-like</ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <h4>En deux étapes</h4>
                <ol>
                    <li>
                        Développement : Une suite d’outils (test runner) permettant de tester en développant,
                        notamment une console Electron
                    </li>
                    <li>
                        Distribution : Un tableau de bord, branché sur une CI, permettant de monitorer les tests
                    </li>
                </ol>
                <p>Serveur NodeJS</p>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>
                    FONCTIONNALITÉS
                </Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Temporisation et retry automatique</ListItem>
                    <ListItem color="quaternary">API claire et complète</ListItem>
                    <ListItem color="quaternary">Interface de debug/Time travel</ListItem>
                    <ListItem color="quaternary">Mocks/Stubs</ListItem>
                    <ListItem color="quaternary">Enregistrement de captures et de videos</ListItem>
                    <ListItem color="quaternary">Contrôle du réseau</ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>
                    CONTRÔLE DE L'ÉTAT DE L'APPLICATION
                </Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Substitution des réponses serveur</ListItem>
                    <ListItem color="quaternary">Injection d’un état initial</ListItem>
                    <ListItem color="quaternary">Variation de l’état du réseau</ListItem>
                    <ListItem color="quaternary">Invocation de code interne ou externe depuis les tests</ListItem>
                    <ListItem color="quaternary">Création de macros</ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>

            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>
                    LIMITATIONS
                </Heading>
                <UnorderedList>
                    <ListItem color="quaternary">CodePane évalué dans le navigateur</ListItem>
                    <ListItem color="quaternary">Choix architecturaux clivants</ListItem>
                    <ListItem color="quaternary">Pas de support de fetch</ListItem>
                    <ListItem color="quaternary">Support navigateurs restreint</ListItem>
                    <ListItem color="quaternary">Communauté encore limitée</ListItem>
                </UnorderedList>
                <Notes>
                    <ul>
                        <li>Seul Javascript peut être supporté. Cas du back-end.</li>
                        <li>Exemple de choix : multi-tabs/windows</li>
                        <li>fetch : Il existe un workaround</li>
                    </ul>
                </Notes>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>ROADMAP</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Prise en charge de nouveaux navigateurs</ListItem>
                    <ListItem color="quaternary">
                        Support de <CodeSpan>fetch</CodeSpan>
                    </ListItem>
                    <ListItem color="quaternary">Intégration des tests unitaires</ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <h4>Navigateurs pris en charge :</h4>
                <ul>
                    <li>Chrome</li>
                    <li>Canary</li>
                    <li>Chromium</li>
                    <li>Electron</li>
                </ul>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>ARCHITECTURE</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">jQuery : Parcours du DOM</ListItem>
                    <ListItem color="quaternary">Mocha : Structures des tests</ListItem>
                    <ListItem color="quaternary">Chai/Chai jQuery : Rédaction des assertions</ListItem>
                    <ListItem color="quaternary">Sinon/Sinon-Chai : Stub et Spy</ListItem>
                    <ListItem color="quaternary">moment, Bluebird, minimatch, ...</ListItem>
                </UnorderedList>
                <Notes>
                    <p>Cypress utilise ces librairies en modifiant leur comportement</p>
                </Notes>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>COMMANDES</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Commandes asynchrones</ListItem>
                    <ListItem color="quaternary">Enchaînement de commandes séquentielles</ListItem>
                    <ListItem color="quaternary">Tentatives répétées d'exécution d'une commande</ListItem>
                    <ListItem color="quaternary">Possibilité de s'intercaler à tout moment dans la chaîne</ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <p>Importance des timeouts (configurable)</p>
                <p>Commandes fonctionnent comme des promesses mais pas complètement (pas de catch)</p>
                <p>Impossible d'utiliser async/await (choix architectural)</p>
                <p>S'intercaler pour debugguer, exécuter une fonction, créer un alias, ...</p>
                <p>Certaines commandes ne peuvent pas être enchainées</p>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>TESTS</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Sélection d'éléments du DOM</ListItem>
                    <ListItem color="quaternary">Intéractions avec les éléments du DOM</ListItem>
                    <ListItem color="quaternary">Assertions sur l'état du DOM</ListItem>
                </UnorderedList>
                <Notes>
                    <p>
                        Sélection des éléments avec la même API que jQuery mais retourne les objects de manière
                        asynchrone
                    </p>
                    <p>
                        Possibilité d’utiliser la couche basse jQuery pour récupérer un élément de manière synchrone
                    </p>
                    <p>Avant d’interagir avec les éléments, Cypress s’assure que l’interaction est possible</p>
                </Notes>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>ASSERTIONS</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Utilise Chai</ListItem>
                    <ListItem color="quaternary">Permet de tester l'état l’application à un moment spécifique</ListItem>
                    <ListItem color="quaternary">Tests des comportements asynchrones</ListItem>
                    <ListItem color="quaternary">Pas forcément nécessaires</ListItem>
                </UnorderedList>
                <Notes>
                    <p>BDD (expect/should) ou TDD (assert)</p>
                    <p>
                        Intégrées dans la chaîne de promesse, elles permettent de tester des comportements
                        asynchrones
                    </p>
                    <p>Certaines commandes implémentent leur propres assertions</p>
                </Notes>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="flex-start">
                <Heading>CONFIGURATION</Heading>
                <UnorderedList>
                    <ListItem color="quaternary">Valeurs globales (env, port, baseUrl, ...)</ListItem>
                    <ListItem color="quaternary">Timeouts</ListItem>
                    <ListItem color="quaternary">File system</ListItem>
                    <ListItem color="quaternary">Viewport</ListItem>
                </UnorderedList>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Heading>PRÉREQUIS</Heading>
                <FlexBox height="100%" flexDirection="row" alignItems="flex-start">
                    <UnorderedList>
                        <ListItem color="quaternary">Mac OS 10.9+, 64bit</ListItem>
                        <ListItem color="quaternary">Linux Ubuntu 12.04+, ...</ListItem>
                        <ListItem color="quaternary">Windows 7+, 32-bit</ListItem>
                    </UnorderedList>
                    <UnorderedList>
                        <ListItem color="quaternary">NodeJS 8+</ListItem>
                    </UnorderedList>
                </FlexBox>
            </FlexBox>
            <Notes>
                <p>Pas de serveur ou de driver à installer</p>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox flexDirection="column" justifyContent="flex-start">
                <Heading>CLI</Heading>
                <CodePane>{`        yarn add -D cypress
        yarn run cypress open [options]
        yarn run cypress run [options]
        yarn run cypress verify
        yarn run cypress version
        yarn run cypress cache
        DEBUG=cypress:* yarn run cypress run`}
                </CodePane>
            </FlexBox>
        </Slide>
        <Slide backgroundImage={`url(${process.env.PUBLIC_URL}/images/poule3.jpg)`} backgroundOpacity={0.2}>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Heading>WORKSHOP</Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <CodePane>https://github.com/untemps/poule-store.git</CodePane>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="90%" flexDirection="column" justifyContent="center">
                <Text color="quaternary">Crédits poules :</Text>
                <Quote color="quaternary">https://www.fermedebeaumont.com</Quote>
            </FlexBox>
        </Slide>
        <Slide backgroundImage={`url(${process.env.PUBLIC_URL}/images/end.jpg)`}>
            <FlexBox height="9  0%" flexDirection="column" justifyContent="center">
                <Image width={200} src={`${process.env.PUBLIC_URL}/images/poule0.png`}/>
            </FlexBox>
        </Slide>
    </Deck>
)

export default App