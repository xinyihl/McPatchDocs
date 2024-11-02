import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'; // 创建一个 CSS 模块

const UpdateLogList = ({ projectName, repoUrl }) => {
  const [updatelists, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(repoUrl);
        setContributors(response.data);
      } catch (error) {
        console.error(`Error fetching contributors for ${projectName}:`, error);
      }
    };

    fetchContributors();
  }, [projectName, repoUrl]);

  return (
    <div className={styles.container}>
      <h2 className={styles.projectTitle}>{projectName}</h2>
      <div className={styles.contributorsGrid}>
        {updatelists.map(item => (
          <div key={item.id} className={styles.contributorItem}>
            {item.name}:
            <Link to={item.html_url} target="_blank" rel="noopener noreferrer">
              <div className={styles.contributorName}>{item.body}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateLogList;