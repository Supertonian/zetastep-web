import styled from 'styled-components';
import Card from '../components/molecules/Card';
import Meta from '../components/Meta';

function HomePage() {
    return (<>
            <Meta />
            <Row>
                <h3>ZetaStep</h3>
            </Row>
            <Row>
                <Card title="월배당 주식" description="매월 배당 주식이 있다?" height={120} marginRight={15} />
                <Card title="월배당 ETF" description="미국 근본 배당 ETF" height={120} />
            </Row>
            <Row>
                <Card title="1/4/7/10" description="" marginRight={15} />
                <Card title="2/5/8/11" description="" marginRight={15} />
                <Card title="3/6/9/12" description="" />
            </Row>
            <Row>
                <Card title="국내 ETF" description="국내에서도 월배당을 챙겨요" />
            </Row>
        </>);
  }

const Row = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 0px;
  margin-right: 0px;
`
  
export default HomePage