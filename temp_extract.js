const fs = require('fs');

// portfolio.ts에서 프로젝트 데이터 추출
const content = fs.readFileSync('c:/mxtencoding/mxten_project_15/src/data/portfolio.ts', 'utf8');

// 간단한 파싱 - demoUrl과 thumbnail 추출
const projects = [];
const lines = content.split('\n');
let currentProject = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.startsWith('id:')) {
    if (currentProject.id) {
      projects.push({...currentProject});
    }
    currentProject = {
      id: line.match(/'([^']+)'/)[1]
    };
  }
  
  if (line.startsWith('demoUrl:') && currentProject.id) {
    const match = line.match(/'([^']+)'/);
    currentProject.demoUrl = match ? match[1] : '';
  }
  
  if (line.startsWith('thumbnail:') && currentProject.id) {
    const match = line.match(/'([^']+)'/);
    currentProject.thumbnail = match ? match[1] : '';
  }
  
  if (line.startsWith('featured:') && currentProject.id) {
    currentProject.featured = line.includes('true');
  }
}

if (currentProject.id) {
  projects.push(currentProject);
}

console.log(JSON.stringify(projects, null, 2));
