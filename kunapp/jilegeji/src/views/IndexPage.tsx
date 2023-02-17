
import styled from '@emotion/styled';
import Title from '../components/Title';
import { Button } from 'antd';
import About from '../components/About';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { easyGameConfig, hardGameConfig, lunaticGameConfig, middleGameConfig, kunGameConfig, yangGameConfig } from '../core/gameConfig';
import GameConfigStore from '../store/store';

const StyleIndexPage = styled.div({
     textAlign:'center'
});

const StyleTitle =  styled(Title)({

});

const StyleDescription = styled.div`
    margin-bottom: 16px;
    color: rgba(0,0,0,.8);
`;

const StyleButton = styled(Button)({
    marginBottom: 16
})

const ButtonList = [
    {
        text:"简单模式",
        config:easyGameConfig
    },
    {
        text:"中等模式",
        config:middleGameConfig
    },
    {
        text:"困难模式",
        config:hardGameConfig
    },
    {
        text:"地狱模式",
        config:lunaticGameConfig
    },
    {
        text:"羊了个羊模式",
        config:yangGameConfig
    },
    {
        text:"开团模式",
        config:kunGameConfig
    },
    {
        text:"自定义",
        config:null
    }
]
const IndexPage = () => {
    const navigate = useNavigate();
    const { config:{ customGameConfig },updateConfig } = GameConfigStore.useModel();
    const toGame = (config:GameConfigType | null) => {
        if(config){
            updateConfig({ gameConfig: config,customGameConfig });
            navigate('/game');
        }else{
            navigate('/config');
        }
    }
    return (
        <StyleIndexPage>
            <StyleTitle level={2}>鸡了个鸡(鲲鲲版)</StyleTitle>
            <StyleDescription>低配版鸡了个鸡小游戏，仅供消遣</StyleDescription>
            {
                ButtonList.map((item,index: number) => (
                    <StyleButton block onClick={() => toGame(item.config)} key={`${item.text}-${index}`}>{ item.text }</StyleButton>
                ))
            }
            <About />
            <Footer />
        </StyleIndexPage>
    )
}

export default IndexPage;