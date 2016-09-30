/**
 * Created by lftakakura on 9/27/16.
 */

// Define the 'sucessocertoApp' module
var sucessocertoApp = angular.module('sucessocertoApp', ['ui.utils.masks', 'ngAnimate', 'toastr']);

// config toaster
sucessocertoApp.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
        autoDismiss: false,
        containerId: 'toast-container',
        maxOpened: 1,
        newestOnTop: true,
        positionClass: 'toast-bottom-left',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body'
    });
});


// Define the 'main' controller on the 'sucessocertoApp' module
sucessocertoApp.controller('mainController', ['$scope', 'toastr', function mainController($scope, toastr) {
//    text constants
    
    // HOME
    $scope.home       = {};
    $scope.home.title = "";
    $scope.home.btn   = "Descubra";
    
    // SERVICES
    $scope.services = {};
    $scope.services.title          = "Serviços";
    $scope.services.items          = [];
    $scope.services.items[0]       = {};
    $scope.services.items[0].title = "SucessoCerto Trends";
    $scope.services.items[0].desc  = "Uma ótima ferramenta para você poder prever tendências. Uma das grandes dúvidas de todo varejista é sobre quais produtos comprar para acertar no mix. Com o auxílio do “Trends” você terá diversas previsões e análises para o planejamento de suas vendas";
    $scope.services.items[0].icon  = "fa-line-chart";
    $scope.services.items[1]       = {};
    $scope.services.items[1].title = "SucessoCerto Analytics";
    $scope.services.items[1].desc  = "Não existe comércio digital, de médio ou grande porte que não utilize ferramentas como esta. Por aqui, você poderá medir visitantes, tempo de navegação, taxa de rejeição, origem, dispositivos usados para acessar seu site, entre outros navegadores";
    $scope.services.items[1].icon  = "fa-pie-chart";
    $scope.services.items[2]       = {};
    $scope.services.items[2].title = "SucessoCerto Master Tools";
    $scope.services.items[2].desc  = "Ferramenta que auxilia principalmente nas melhorias de busca para seu site. Através dela é possível entender como o Google ou outras ferramentas de busca podem ler seu site e levar os clientes até você";
    $scope.services.items[2].icon  = "fa-wrench";
    $scope.services.items[3]       = {};
    $scope.services.items[3].title = "SucessoCerto Page Boost";
    $scope.services.items[3].desc  = "Módulo que irá auxiliá-lo a melhorar a velocidade e performance de seu comércio eletrônico. Além disso, apresenta sugestões de melhorias técnicas e visuais para seu site";
    $scope.services.items[3].icon  = "fa-rocket";
    $scope.services.items[4]       = {};
    $scope.services.items[4].title = "SucessoCerto E-mail Marketing";
    $scope.services.items[4].desc  = "Com esse módulo você poderá enviar mais de 12.000 e-mails marketing para seus atuais e possíveis clientes!";
    $scope.services.items[4].icon  = "fa-users";
    $scope.services.items[5]       = {};
    $scope.services.items[5].title = "SucessoCerto Consulting";
    $scope.services.items[5].desc  = "Consultoria exclusiva que irá auxiliá-lo com boas práticas de negócio e uso inteligente das ferramentas disponibilizadas para impulsionar seu e-commerce";
    $scope.services.items[5].icon  = "fa-users";

    // ABOUT
    $scope.about          = {};
    $scope.about.title    = "Sobre";
    $scope.about.subtitle = "Focada em empresas que realizam suas operações através do e-commerce, atuamos desde seu plano de negócio até o acompanhamento e melhorias de sua loja virtual";
    $scope.about.desc     = "Através de um pacote de serviços, iremos auxiliar a sua empresa a melhorar seus processos de gestão digital, retenção e aquisição de novos clientes, melhorias de processos e marketing de seu comércio eletrônico, destacando-o em seu segmento de atuação e aumentando a lucratividade e produtividade de sua empresa!";
    $scope.about.btn      = "Veja";

    // PRICING
    $scope.pricing          = {};
    $scope.pricing.title    = "Preços";
    $scope.pricing.subtitle = "Pacotes de serviços que cabem no seu bolso";

    // CONTACT
    $scope.contact            = {};
    $scope.contact.title      = "Fale conosco";
    $scope.contact.subtitle   = "Se inscreva que nós entramos em contato com você";
    $scope.contact.email      = "contato@sucessocerto.net";
    $scope.contact.facebook   = "https://facebook.com/sucessocertobr";

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDob2_UR1vJBEuV0ZWfjqsSFaq05GBRKHw",
        authDomain: "sucessocerto-37a42.firebaseapp.com",
        databaseURL: "https://sucessocerto-37a42.firebaseio.com",
        storageBucket: "sucessocerto-37a42.appspot.com",
        messagingSenderId: "826745021398"
    };
    firebase.initializeApp(config);

    $scope.submit = function () {
       // check name
        if (!$scope.name) {
            toastr.error('Insira seu nome', 'Ops!');
            return;
        }
        // check email
        var re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re_email.test($scope.email)) {
            toastr.error('Insira seu email corretamente', 'Ops!');
            return;
        }

        // check phone
        if (!$scope.phone) {
            toastr.error('Insira seu telefone', 'Ops!');
            return;
        }

        // TODO push on firebase
        var user = {};
        user.name = $scope.name;
        user.email = $scope.email;
        user.phone = $scope.phone;
        firebase.database().ref('/').push(user);
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
        toastr.success('Entraremos em contato em breve', 'Obrigado!');

    }


}]);