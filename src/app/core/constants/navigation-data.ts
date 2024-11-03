import { SideMenuItem } from "../interfaces/@type";
import { ROUTING } from "./routing.enum";

export const DATA_ROUTING: SideMenuItem[] = [
    {
        id: 1,
        label: 'THURSDAY DD/MM/YYYY',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'uil-home-alt',
        // badge: {
        //     variant: 'primary',
        //     text: '01', //'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: ROUTING.DASHBOARD,
    },
    {
        id: 3,
        label: 'MENUITEMS.PURCHASEAGREEMENT.TEXT',
        icon: 'uil-tag-alt',
        link: ROUTING.PURCHASE_AGREEMENT,
    },
    {
        id: 4,
        label: 'MENUITEMS.SALESAGREEMENT.TEXT',
        icon: 'uil-file-edit-alt',
        link: ROUTING.SALES_AGREEMENT,
    },
    {
        id: 5,
        label: 'MENUITEMS.VEHICLEMASTER.TEXT',
        icon: 'uil-car',
        link: ROUTING.VEHICLE_MASTER,
    },
    {
        id: 6,
        label: 'MENUITEMS.HPAPPLICATION.TEXT',
        icon: 'uil-file-contract-dollar',
        link: ROUTING.HP_APPLICATION,
    },
    {
        id: 7,
        label: 'MENUITEMS.FLOORSTOCKAPPLICATION.TEXT',
        icon: 'uil-layer-group',
        link: ROUTING.FLOOR_STOCK_APPLICATION,
    },
    {
        id: 8,
        label: 'MENUITEMS.INSURANCEQUOTATION.TEXT',
        icon: 'uil-shield-check',
        link: ROUTING.INSURANCE_QUOTATION,
    },
    {
        id: 9,
        label: 'MENUITEMS.CONTACT.TEXT',
        icon: 'uil-user-square',
        link: ROUTING.CONTACT,
    },
];