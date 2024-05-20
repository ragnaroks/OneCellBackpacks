import {DependencyContainer} from 'tsyringe';
import {IPostDBLoadMod} from '@spt-aki/models/external/IPostDBLoadMod';
import {ILogger} from "@spt-aki/models/spt/utils/ILogger";
import {DatabaseServer} from '@spt-aki/servers/DatabaseServer';
import {IDatabaseTables} from '@spt-aki/models/spt/server/IDatabaseTables';

const type1ParentId:string = '5448e53e4bdc2d60728b4567';
const type1IdArray:Array<string> = [
    '5ca20d5986f774331e7c9602', // Wartech Berkut BB-102 背包
    '60a272cc93ef783291411d8e', // Hazard 4 Drawbridge 背包
    '5ab8f04f86f774585f4237d8', // 战术挎包
    '545cdae64bdc2d39198b4568', // Camelbak Tri-Zip 背包
    '628e1ffc83ec92260c0f437f', // Gruppa 99 T30 背包
    '6038d614d10cbf667352dd44', // Hazard4 Takedown 吊带背包（multicam）
    '656ddcf0f02d7bcea90bf395', // Tehinkom RK-PT-25 巡逻背包（数码丛林迷彩）
    '619cf0335771dd3c390269ae', // Gruppa 99 T20 背包 （复合迷彩）
    '5df8a4d786f77412672a1e3b', // 6SH118 突击背包
    '628bc7fb408e2b2e9c0801b1', // Mystery Ranch NICE COMM 3 BVS 稳固系统
    '544a5cde4bdc2d39388b456b', // Flyye MBSS 背包
    '62a1b7fbc30cfa1d366af586', // Gruppa 99 T30 背包（复合迷彩）
    '61b9e1aaef9a1b5d6a79899a', // 圣诞老人的背包
    '56e33680d2720be2748b4576', // 邮差小挎包
    '5c0e774286f77468413cc5b2', // Mystery Ranch Blackjack 50 背包（组合迷彩）
    '5d5d940f86f7742797262046', // Oakley Mechanism 重型背包 Black
    '639346cc1c8f182ad90c8972', // Tasmanian Tiger Trooper 35 背包
    '5e9dcf5986f7746c417435b3', // LBT-8005A Day Pack 背包
    '5e997f0b86f7741ac73993e2', // Sanitar 包
    '618cfae774bb2d036a049e7c', // LBT-1476A 3Day 背包（Woodland）
    '5f5e46b96bdad616ad46d613', // Eberlestock F4 Terminator 承重背包（虎纹迷彩）
    '5f5e467b0bc58666c37e7821', // Eberlestock F5 Switchblade 背包（干土色）
    '6034d2d697633951dc245ea6', // Eberlestock G2 Gunslinger II 背包 (dry earth)
    '56e335e4d2720b6c058b456d', // Scav 背包
    '56e33634d2720bd8058b456b', // 旅行包
    '656e0436d44a1bb4220303a0', // Mystery Ranch SATL Bridger 突击背包（叶绿色）
    '5ab8ee7786f7742d8f33f0b9', // VKBO 军用背包
    '6034d103ca006d2dca39b3f0', // Hazard4 Takedown 吊带背包
    '60a2828e8689911a226117f9', // Hazard4 Pillbox 背包
    '5f5e45cc5021ce62144be7aa', // LK 3F Transfer 旅行背包
    '618bb76513f5097c8d5aa2d5', // Gruppa 99 T20 背包
    '5c0e805e86f774683f3dd637', // 3V G Paratus 3-Day Operator's 战术背包
    '5e4abc6786f77406812bd572', // LBT-2670 小型野战医物包
    '59e763f286f7742ee57895da', // Pilgrim 旅行包
    '5ab8ebf186f7742d8b372e80', // SSO "Attack 2" 突击背包
    '656f198fb27298d6fd005466', // Direct Action Dragon Egg Mark II 背包（黑色）
    '5b44c6ae86f7742d1627baea', // Ana tactical Beta 2 战斗背包
];

class Mod implements IPostDBLoadMod {
    public postDBLoad(container:DependencyContainer): void {
        const logger = container.resolve<ILogger>('WinstonLogger');
        const databaseServer = container.resolve<DatabaseServer>('DatabaseServer');
        
        const tables:IDatabaseTables = databaseServer.getTables();

        for (const iterator of type1IdArray) {
            const template = tables.templates.items[iterator] || null;
            if(!template){continue;}
            if(template._parent !== type1ParentId){continue;}
            template._props.Weight = 0;
            template._props.Width = 1;
            template._props.Height = 1;
            template._props.mousePenalty = 0;
            template._props.speedPenaltyPercent = 0;
            template._props.weaponErgonomicPenalty = 0;
        }

        logger.warning('[OneCellBackpacks]: backpacks width and height modified');
    }
}

module.exports = {
    mod: new Mod()
};
