import React from 'react';
import { Layout, Menu, Typography, List, Divider } from 'antd';
import styled from '@emotion/styled';
import '@fontsource/inter';
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const HeaderStyle = styled.header`
  padding: 20px;
  display: flex;
  justify-content: center;
  background: #3fa9f5;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TopImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ContentWrapper = styled(Content)`
  padding: 20px;
  background: #333333;
  color: white;
  font-family: 'Inter', sans-serif;
`;

const HighlightedText = styled.span`
  color: #3fa9f5;
`;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh', width: '100vw', color: '#333333' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ background: '#3FA9F5', color: 'white' }}
      >
        <HeaderStyle>Xander's Portfolio</HeaderStyle>
        <Menu style={{ background: '#3FA9F5', color: 'white' }} mode="inline" />
      </Sider>
      <Layout>
        <TopImage src="Banner.png" alt="Portfolio Banner" />
        <ContentWrapper>
          <Title level={1} style={{ color: 'white' }}>
            My <HighlightedText>Portfolio</HighlightedText>
          </Title>
          <Title level={2} style={{ color: 'white' }}>👋 Hi, I'm Xander Van der Steichel!</Title>
          <Text style={{ color: 'white' }}>
          I am a third-year Bachelor's student in <strong>Applied Computer Science</strong> at <strong>HoGent</strong>,
          specializing in <strong>Mobile & Enterprise Development</strong>. Passionate about crafting user-friendly and impactful solutions,
          I have experience in <strong>Android, iOS, React</strong>, and various <strong>backend technologies</strong>.
          <br /><br />
          Besides my studies and work experience in the IT sector, I have a personal project: <strong>X Prints</strong>, a small 3D printing initiative.
          Although this venture is not officially registered, it allows me to bring creative ideas to life and deliver custom-made solutions.
          This project enables me to combine my technical skills with creativity.
        </Text>

          <Divider />

          <Title level={3} style={{ color: 'white' }}>💡 Soft Skills</Title>
          <List
            dataSource={['Conscientious & detail-oriented', 'Strong planning skills', 'Highly driven & motivated']}
            renderItem={(item) => <List.Item><Text style={{ color: 'white' }}>{item}</Text></List.Item>}
          />
          <Divider />

          <Title level={3} style={{ color: 'white' }}>🎓 Education</Title>
          <List>
            <List.Item><Text style={{ color: 'white' }}><strong>Professional Bachelor's in Applied Computer Science</strong> (2022 - 2025) – Hogeschool Gent</Text></List.Item>
            <List.Item><Text style={{ color: 'white' }}><strong>Technical Secondary Education - Industrial Informatics & Communication Technology</strong> (2020 - 2022)</Text></List.Item>
            <List.Item><Text style={{ color: 'white' }}><strong>Technical Secondary Education - Industrial Sciences</strong> (2016 - 2020)</Text></List.Item>
          </List>
          <Divider />

          <Title level={3} style={{ color: 'white' }}>💼 Work Experience</Title>
          <List>
          <List.Item><Text style={{ color: 'white' }}><strong>Internship: Mobile & Web Development</strong> (Jan 2025 - May 2025) – Delaware</Text></List.Item>
          <List.Item><Text style={{ color: 'white' }}><strong>IT Store Employee</strong> (Jul 2023 - Present) – ITS PLUS BV</Text></List.Item>
          <List.Item><Text style={{ color: 'white' }}><strong>Metalworking Employee</strong> (Jul 2021 - Present) – Q-developments by Quatra</Text></List.Item>
          <List.Item><Text style={{ color: 'white' }}><strong>Internship: Web Developer</strong> (Sep 2022 - Dec 2022) – Q-developments by Quatra</Text></List.Item>
          <List.Item><Text style={{ color: 'white' }}><strong>Sports Camp Instructor (Mountain Biking)</strong> (Jul 2021) – Recreatief VZW</Text></List.Item>
          <List.Item><Text style={{ color: 'white' }}><strong>Retail Employee</strong> (Jul 2020) – Delhaize Belgium</Text></List.Item>
          </List>
          <Divider />

          <Title level={3} style={{ color: 'white' }}>🛠 Technical Skills</Title>
          <List
            dataSource={['Programming: Java, JavaFX, C, C#, C++, Swift, Kotlin', 'Web & Mobile: HTML, CSS, JavaScript, React, .NET', 'Databases: SQL, NoSQL']}
            renderItem={(item) => <List.Item><Text style={{ color: 'white' }}>{item}</Text></List.Item>}
          />
          <Divider />

          <Title level={3} style={{ color: 'white' }}>🌍 Languages</Title>
          <List>
            <List.Item><Text style={{ color: 'white' }}><strong>Dutch</strong> (Native)</Text></List.Item>
            <List.Item><Text style={{ color: 'white' }}><strong>English</strong> (Fluent)</Text></List.Item>
          </List>
          <Divider />

          <Title level={3} style={{ color: 'white' }}>📩 Contact</Title>
          <List>
            <List.Item><Text style={{ color: 'white' }}><PhoneOutlined /> +32 477 729 159</Text></List.Item>
            <List.Item><Text style={{ color: 'white' }}><MailOutlined /> xander.vandersteichel@gmail.com</Text></List.Item>
            <List.Item><Text style={{ color: 'white' }}><LinkedinOutlined /> <a href="#" style={{ color: '#3fa9f5' }}>LinkedIn</a></Text></List.Item>
          </List>
        </ContentWrapper>
        <Footer style={{ textAlign: 'center', background: '#333333', color: 'white' }}>
          ©{new Date().getFullYear()} Created by Xander Van der Steichel
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
