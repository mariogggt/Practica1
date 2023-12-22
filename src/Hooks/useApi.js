import React from 'react';

export const useApi = (url) => {

    switch (url.split('?')[0]) {
        case '/products':
            return [
                {
                    'id_product': 1,
                    'name': 'Coca cola',
                    'price': 1,
                    'quantity': 15
                },
                {
                    'id_product': 2,
                    'name': 'Cerveza',
                    'price': 1.3,
                    'quantity': 23
                },
                {
                    'id_product': 3,
                    'name': 'Kas limón',
                    'price': 1,
                    'quantity': 21
                },
                {
                    'id_product': 4,
                    'name': 'Kas naranja',
                    'price': 1,
                    'quantity': 28
                },
                {
                    'id_product': 5,
                    'name': 'Cerveza sin alchool',
                    'price': 1.3,
                    'quantity': 28
                },
                {
                    'id_product': 6,
                    'name': 'Café solo',
                    'price': 0.8,
                    'quantity': 23
                },
                {
                    'id_product': 7,
                    'name': 'Café con leche',
                    'price': 1.2,
                    'quantity': 23
                },
                {
                    'id_product': 8,
                    'name': 'Cortado',
                    'price': 1.1,
                    'quantity': 20
                },
                {
                    'id_product': 9,
                    'name': 'Copa',
                    'price': 1.8,
                    'quantity': 17
                }
            ];

        case '/receipts':
            return [
                {
                    'id_receipt': 1,
                    'user': 'Mario',
                    'number': 12,
                    'date': '06-12-2023',
                    'products': [
                        {
                            'id_product': 1,
                            'quantity':1,
                            'price': 1
                        },
                        {
                            'id_product': 2,
                            'quantity':2,
                            'price': 1.3
                        }
                    ]
                },
                {
                    'id_receipt': 2,
                    'user': 'Mario',
                    'number': 13,
                    'date': '09-12-2023',
                    'products': [
                        {
                            'id_product': 1,
                            'quantity':1,
                            'price': 1
                        },
                        {
                            'id_product': 2,
                            'quantity':2,
                            'price': 1.3
                        }
                    ]
                }
            ];

        case '/receipt': 
            return {
                'id_receipt': 1,
                'user': 'Mario',
                'number': 12,
                'date': '06-12-2023',
                'products': [
                    {
                        'id_product': 1,
                        'name': 'Coca cola',
                        'quantity':1,
                        'price': 1
                    },
                    {
                        'id_product': 2,
                        'name': 'Cerveza',
                        'quantity':2,
                        'price': 1.3
                    }
                ]
            }
    }

    return [];
}