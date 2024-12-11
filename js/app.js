// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
    id: 'com.app',
    root: '#app',
    theme: 'md', // Cambiar a 'ios' o 'auto' si se requiere
    view: {
        pushState: true, // Habilita navegación usando la barra de direcciones
        stackPages: true, // Habilita mantener historial de páginas
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Home', // Título para los diálogos
    panel: {
        swipe: true, // Habilita swipe para abrir panel
    },
    routes: [
        {
            path: '/home/',
            url: './index.html', // Cambiar rutas absolutas a relativas
            name: 'home',
        },
        {
            path: '/atuendos/',
            url: './atuendos.html',
            name: 'atuendos',
        },
        {
            path: '/carrito/',
            url: './carrito.html',
            name: 'carrito',
        },
        {
            path: '/eukanuba/',
            url: './eukanuba.html',
            name: 'eukanuba',
        },
        {
            path: '/aboutus/',
            url: './aboutus.html',
            name: 'aboutus',
        },
    ],
    dialog: {
        title: 'Mundo Mascotas',
        buttonOk: 'Aceptar',
    },
    popup: {
        closeOnEscape: true,
        backdrop: false,
    },
    sheet: {
        closeOnEscape: true,
    },
    popover: {
        closeOnEscape: true,
    },
    actions: {
        closeOnEscape: true,
    },
});

// Login Button Event
$$('#btnLogin').on('click', function (e) {
    e.preventDefault();

    var $valid = $$('#form-login')[0].checkValidity();
    if ($valid) {
        $$('#form-login').trigger('reset');
        app.loginScreen.close('#modal-login');
        app.dialog.alert('¡ Bienvenido a la APP !');
    }
});

// Checkout Button Event
$$(document).on('click', '#btnCheckout', function (e) {
    e.preventDefault();

    app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
        var notification = app.notification.create({
            icon: '<i class="material-icons">check</i>',
            title: 'Orden Recibida',
            titleRightText: '',
            subtitle: '',
            text: "Tu orden ha sido recibida exitosamente.",
            closeTimeout: 3000,
        });
        notification.open();
    });
});
