/**
 * Created by lftakakura on 9/27/16.
 */

// Define the 'sucessocertoApp' module
var sucessocertoApp = angular.module('sucessocertoApp', []);

// Define the 'main' controller on the 'sucessocertoApp' module
sucessocertoApp.controller('mainController', ['$scope', function mainController($scope) {
//    text constants
    
    // HOME
    $scope.home       = {};
    $scope.home.title = "Comece a vender com segurança";
    $scope.home.btn   = "Descubra como";
    
    // ABOUT
    $scope.about = {};
    $scope.about.title          = "Veja só como podemos te ajudar a começar o seu negócio";
    $scope.about.items          = [];
    $scope.about.items[0]       = {};
    $scope.about.items[0].title = "Voe sem medo";
    $scope.about.items[0].desc  = "Mostramos a você como iniciar um novo negócio e como alavancar suas vendas sem mistério";
    $scope.about.items[0].icon  = "fa-paper-plane";
    $scope.about.items[1]       = {};
    $scope.about.items[1].title = "Vá até o topo";
    $scope.about.items[1].desc  = "Te ajudamos a transformar o seu comércio, seja físico ou virtual, e atrair muito mais clientes";
    $scope.about.items[1].icon  = "fa-flag-o";
    $scope.about.items[2]       = {};
    $scope.about.items[2].title = "Não tenha dúvidas";
    $scope.about.items[2].desc  = "Estamos sempre pertinho de você, no seu celular, pra você tirar as suas dúvidas e ouvir conselhos quando quiser";
    $scope.about.items[2].icon  = "fa-comment";

    // EVENTS
    $scope.events          = {};
    $scope.events.title    = "Participe de nosso Webinar!";
    $scope.events.subtitle = "Como criar um negócio e alavancar as vendas em período de crise";
    $scope.events.desc     = "";
    $scope.events.btn      = "Venha conferir nosso evento! (em breve)";

    // BLOG
    $scope.blog           = {};
    $scope.blog.title     = "BlogPost do dia";
    $scope.blog.subtitle  = "Como estabelecer metas para aumentar as vendas";
    $scope.blog.desc      = "Existe muito material na internet prometendo aumentar as suas vendas. Mas a verdade é uma só," +
        "para vender mais é necessário Estratégia e Ação.";
    $scope.blog.btn       = "Continue lendo (em breve)";

    // CONTACT
    $scope.contact       = {};
    $scope.contact.title = "Vamos Interagir!";

}]);