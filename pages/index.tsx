import styled from 'styled-components';
import Card from '../components/molecules/Card';

function HomePage() {
    return (<>
            <Row>
                <h3>달달배당</h3>
            </Row>
            <Row style={{ height: '65px' }}>
                <Card title="매월 배당 Stock" description="test" />
                <Card title="매월 배당 ETF" description="test" />
            </Row>
            <Row style={{ height: '50px' }}>
                <Card title="1/4/7/10" description="test" />
                <Card title="2/5/8/11" description="test" />
                <Card title="3/6/9/12" description="test" />
            </Row>
            <Row style={{ height: '50px' }}>
                <Card title="국내 ETF" description="test" />
            </Row>
            <Spacer />
        </>);
  }

const Row = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
`

const Spacer = styled.hr`
  margin: 10px;
  border: 0.5px solid #d8d8d8;
`
  
export default HomePage