import {Component, OnInit} from '@angular/core';
import {HighlightState} from '../../features/shared';
import {Title} from '@angular/platform-browser';

interface Contributor {
  name: string;
  link: string;
  work: string;
  title: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highlightState: HighlightState;
  category: string;
  devOpsExample = `
| 项目 / 过程管理 | 配置管理 | 构建  | 测试 / 质量 | 制品 / 部署 | 基础设施 | 沟通协作 | 可视化   |
|---|----|---|---|----|----|----|----|
| Jira          | Gitee   | Maven | Junit      | Ubran code | VMWare  | 招呼     | Tableau |
| Tracker       | Rational ClearCase |  Gradle | Cucumber | Fit2Cloud | OpenShift | 移事通 | Grafana |
| VP            | CMDB | NPM | JMeter     | B9         | Cloud Foundry | | Kibana |
| Confluence    |   Firefly    | Ant   | RobotFramework | JFrog Artifactory | | |  Prometheus |
| ITIL          |    | MSBuild | Protractor | | | | ElasticSearch |
|               |           |  Docker  | Sonar | | | | X-Pack |
|               |           |        | BlackDuck | | | | |
    `;

  processTemplate = `
|源码管理|制品管理|配置管理|数据库自动化|测试|持续集成|监控|分析|智能运维| 协作|
|---|---|---|---|---|---|---|---|---|---|
  `;
  contributors: Contributor[] = [
    {
      name: 'Phodal',
      link: 'https://www.phodal.com',
      work: '发起人、主要维护者',
      title: 'ThoughtWorks 高级咨询师',
      avatar: 'https://avatars3.githubusercontent.com/u/472311?s=460&u=3d7d46bf34e32449b1439178ae7652cf06d130f1&v=4'
    },
    {
      name: '刘宇',
      link: 'https://github.com/LiuuY',
      work: '丰富学习案例',
      title: 'ThoughtWorks 高级咨询师',
      avatar: 'https://avatars0.githubusercontent.com/u/14286374?s=460&u=1933f64247e26812c67ca1c41aa0b7ba23b069f6&v=4'
    },
    {
      name: 'You',
      link: '',
      title: '',
      work: 'Help us, testing in production, give feedback',
      avatar: '/assets/resources/images/avatar.svg'
    }
  ];

  constructor(title: Title) {
    title.setTitle('DevOps 知识平台 Ledge - Periodic Table');
  }

  setCurrentAtomCategory(category: string) {
    this.category = category;
  }

  ngOnInit(): void {
  }
}
