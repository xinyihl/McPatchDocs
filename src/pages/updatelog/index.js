import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import UpdateLogList from '../../components/UpdateLogList';
import styles from './styles.module.css'; // 创建一个 CSS 模块

const UpdateLogPage = () => {
  return (
    <Layout title="UpdateLog" description="List of updatelog to the project">
      <Head>
        <title>更新日志 | McPatchDocs</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>更新日志</h1>
        <UpdateLogList
          projectName="V2 管理端&客户端"
          repoUrl="https://api.github.com/repos/BalloonUpdate/McPatch2/releases"
        />
      </div>
    </Layout>
  );
};

export default UpdateLogPage;