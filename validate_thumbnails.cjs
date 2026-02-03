// 83개 프로젝트 URL & 썸네일 검증 스크립트
const fs = require('fs');
const path = require('path');

// portfolio.ts 파일 읽기
const portfolioPath = 'c:/mxtencoding/mxten_project_15/src/data/portfolio.ts';
const content = fs.readFileSync(portfolioPath, 'utf8');

// 프로젝트 데이터 추출
const projects = [];
const lines = content.split('\n');
let currentProject = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // 새 프로젝트 시작
  if (line.match(/^id:\s*['"]([^'"]+)['"]/)) {
    if (currentProject && currentProject.id) {
      projects.push({ ...currentProject });
    }
    currentProject = {
      id: line.match(/['"]([^'"]+)['"]/)[1],
      demoUrl: '',
      thumbnail: '',
      featured: false
    };
  }
  
  // demoUrl 추출 (optional과 required 둘 다 처리)
  if (line.match(/^demoUrl\??:\s*['"]([^'"]*)['"]/)) {
    if (currentProject) {
      currentProject.demoUrl = line.match(/['"]([^'"]*)['"]/)[1];
    }
  }
  
  // thumbnail 추출
  if (line.match(/^thumbnail:\s*['"]([^'"]+)['"]/)) {
    if (currentProject) {
      currentProject.thumbnail = line.match(/['"]([^'"]+)['"]/)[1];
    }
  }
  
  // featured 추출
  if (line.match(/^featured:\s*(true|false)/)) {
    if (currentProject) {
      currentProject.featured = line.includes('true');
    }
  }
}

// 마지막 프로젝트 추가
if (currentProject && currentProject.id) {
  projects.push(currentProject);
}

console.log('\n=== 83개 프로젝트 URL & 썸네일 검증 결과 ===\n');
console.log(`총 프로젝트 수: ${projects.length}개\n`);

// 검증
const correct = [];
const incorrect = [];
const missingUrl = [];

projects.forEach(project => {
  const { id, demoUrl, thumbnail, featured } = project;
  
  // URL에서 도메인 앞부분 추출
  let expectedFileName = '';
  
  if (demoUrl.match(/https?:\/\/([^.]+)\.vercel\.app/)) {
    const match = demoUrl.match(/https?:\/\/([^.]+)\.vercel\.app/);
    expectedFileName = `${match[1]}.png`;
  } else if (demoUrl.match(/https?:\/\/([^/]+)/)) {
    const match = demoUrl.match(/https?:\/\/([^/]+)/);
    const domain = match[1];
    expectedFileName = `${domain.replace(/\./g, '-')}.png`;
  }
  
  // 썸네일에서 파일명만 추출
  const actualFileName = thumbnail.split('/').pop();
  
  // 비교
  if (!demoUrl) {
    missingUrl.push({
      id,
      thumbnail: actualFileName,
      featured
    });
  } else if (actualFileName === expectedFileName) {
    correct.push({
      id,
      fileName: actualFileName,
      featured
    });
  } else {
    incorrect.push({
      id,
      demoUrl,
      expected: expectedFileName,
      actual: actualFileName,
      featured
    });
  }
});

console.log(`✅ 정상 (URL과 썸네일 일치): ${correct.length}개`);
console.log(`❌ 불일치 (수정 필요): ${incorrect.length}개`);
console.log(`⚠️  URL 누락: ${missingUrl.length}개\n`);

// 불일치 프로젝트 상세
if (incorrect.length > 0) {
  console.log('=== 불일치 프로젝트 상세 (⭐ = Featured) ===\n');
  incorrect.forEach(p => {
    console.log(`${p.featured ? '⭐' : '  '} ID: ${p.id}`);
    console.log(`   URL: ${p.demoUrl}`);
    console.log(`   현재: ${p.actual}`);
    console.log(`   필요: ${p.expected}\n`);
  });
}

// Featured 정상 프로젝트
const featuredCorrect = correct.filter(p => p.featured);
if (featuredCorrect.length > 0) {
  console.log('=== 정상 프로젝트 중 Featured (⭐) ===\n');
  featuredCorrect.forEach(p => {
    console.log(`⭐ ${p.id}: ${p.fileName}`);
  });
  console.log('');
}

// 생성해야 할 이미지 목록
if (incorrect.length > 0) {
  console.log('=== 생성해야 할 썸네일 이미지 목록 ===\n');
  const uniqueFiles = [...new Set(incorrect.map(p => p.expected))].sort();
  uniqueFiles.forEach(file => {
    const project = incorrect.find(p => p.expected === file);
    console.log(`${project.featured ? '⭐' : '  '} ${file} (ID: ${project.id})`);
  });
  console.log('');
}

// 리포트 저장
const report = `
===================================================================
83개 프로젝트 썸네일 검증 리포트
생성일시: ${new Date().toLocaleString('ko-KR')}
===================================================================

📊 요약
- 전체 프로젝트: ${projects.length}개
- ✅ 정상: ${correct.length}개  
- ❌ 불일치: ${incorrect.length}개
- ⚠️ URL 누락: ${missingUrl.length}개

===================================================================
❌ 불일치 프로젝트 (수정 필요)
===================================================================

${incorrect.map(p => `
${p.featured ? '⭐' : ''} ID: ${p.id}
  DemoURL: ${p.demoUrl}
  현재 썸네일: ${p.actual}
  필요한 파일명: ${p.expected}
`).join('\n')}

===================================================================
🎨 생성해야 할 썸네일 이미지 목록 (중복 제거)
===================================================================

${[...new Set(incorrect.map(p => p.expected))].sort().map(f => `  - ${f}`).join('\n')}

===================================================================
✅ 정상 프로젝트 (Featured만)
===================================================================

${correct.filter(p => p.featured).map(p => `  ⭐ ${p.id}: ${p.fileName}`).join('\n')}

===================================================================
📋 전체 프로젝트 매핑 테이블
===================================================================

${projects.map(p => {
  const fileName = p.thumbnail.split('/').pop();
  const status = correct.find(c => c.id === p.id) ? '✅' : 
                 incorrect.find(i => i.id === p.id) ? '❌' : '⚠️';
  return `${status} ${p.id.padEnd(20)} | ${fileName}`;
}).join('\n')}
`;

fs.writeFileSync('c:/mxtencoding/mxten_project_15/thumbnail_validation_report.txt', report, 'utf8');

// JSON 결과도 저장
const jsonResult = {
  summary: {
    total: projects.length,
    correct: correct.length,
    incorrect: incorrect.length,
    missingUrl: missingUrl.length
  },
  correct,
  incorrect,
  missingUrl,
  needToCreate: [...new Set(incorrect.map(p => p.expected))].sort()
};

fs.writeFileSync('c:/mxtencoding/mxten_project_15/validation_result.json', JSON.stringify(jsonResult, null, 2), 'utf8');

console.log('📄 리포트가 저장되었습니다:');
console.log('   - thumbnail_validation_report.txt (상세 리포트)');
console.log('   - validation_result.json (JSON 형식)');
