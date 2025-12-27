# KMAP Working Group Website

## Project Overview
- **URL**: https://kmapgroup.github.io
- **GitHub**: https://github.com/kmapgroup/kmapgroup.github.io
- **Organization**: kmapgroup
- **Template**: Allan Lab academic website template
- **Framework**: Jekyll (GitHub Pages)

## Site Structure
- **Menu**: Home → Members → Research → Publications → Events
- **KMAP**: Korean Migration And Politics Working Group
- **Affiliation**: Korea University, Department of Political Science
- **PI**: Woo Chang Kang (Associate Professor)

## Key Files
| 파일 | 용도 |
|------|------|
| `_config.yml` | 사이트 설정 (제목, URL, 메뉴 등) |
| `_data/pi.yml` | PI 정보 (Woo Chang Kang) |
| `_data/team_members.yml` | 멤버 정보 (professor, student) |
| `_data/alumni.yml` | 졸업생 정보 |
| `_pages/members.md` | 멤버 페이지 템플릿 |
| `/images/멤버사진/` | 멤버 프로필 사진 |

## Technical Notes
- GitHub Pages는 `jekyll-scholar` 플러그인 지원 안 함
- `jekyll-sitemap` 플러그인만 사용
- bibliography 태그 사용 금지 (빌드 오류 발생)
- 전체 페이지 max-width: 1400px (`_includes/head.html`에서 설정)

---

## 멤버 추가/수정 규칙

### 파일 구조
- **PI**: `_data/pi.yml`
- **멤버**: `_data/team_members.yml`
- **사진**: `/images/멤버사진/` 폴더

### 멤버 데이터 형식 (`team_members.yml`)
```yaml
- name: 영문이름 (한글이름)
  photo: 멤버사진/파일명.jpg
  info: 직위, 소속
  email: email@example.com      # 교수만 공개, 학생은 주석처리
  role: professor 또는 student
  research: 연구 관심사
```

### 역할(role) 구분
- `professor`: Researchers 섹션에 표시, 이메일 공개
- `student`: Students 섹션에 표시, 이메일 비공개 (주석처리)

### 이메일 공개 규칙
- **교수/연구원**: `email: xxx@xxx.com` (공개)
- **학생**: `# email: xxx@xxx.com` (주석처리, 비공개)
- 나중에 공개하려면 `#` 제거

### 멤버 추가 절차
1. 사진 파일 → `/images/멤버사진/` 폴더에 저장
2. `_data/team_members.yml` 수정
3. Git commit & push

---

## Session Log

### 2024-12-25: 초기 설정 완료

#### 완료된 작업
1. **GitHub Organization 생성**: `kmapgroup`
2. **웹사이트 생성 및 배포**: Allan Lab 템플릿 적용
3. **사이트 구조 설정**: 메뉴, PI 정보, 연구 주제
4. **빌드 오류 수정**: jekyll-scholar 제거
5. **멤버 정보 수집 준비**: Google Form 양식 설계

---

### 2025-12-27: 멤버 페이지 구축

#### 완료된 작업
1. **멤버 정보 추가** (Google Form 응답 기반)
   - Woo Chang Kang (강우창, PI)
   - Byoungha Lee (이병하) - Researcher
   - Heedo Lee (이희도) - MA Student
   - Jiwoon Kim (김지운) - PhD Student
   - Kyungrim Chung (정경림) - MA Student
   - Sumin Kim (김수민) - MA Student

2. **멤버 페이지 구조 개선**
   - 3개 섹션: Researchers, Students, Alumni
   - Two-column 레이아웃
   - Research Interest 표시

3. **이메일 공개 정책 설정**
   - 교수/연구원: 공개
   - 학생: 비공개 (주석처리로 나중에 변경 가능)

4. **레이아웃 개선**
   - 전체 페이지 max-width: 800px → 1400px
   - 좌우 마진 축소

5. **빌드 오류 수정**
   - CLAUDE.md 내 bibliography 태그 이스케이프

#### 현재 멤버 현황
| 이름 | 역할 | 이메일 공개 |
|------|------|------------|
| Woo Chang Kang (강우창) | PI | ✓ |
| Byoungha Lee (이병하) | Professor | ✓ |
| Heedo Lee (이희도) | Student | ✗ |
| Jiwoon Kim (김지운) | Student | ✗ |
| Kyungrim Chung (정경림) | Student | ✗ |
| Sumin Kim (김수민) | Student | ✗ |

#### 다음 단계 (TODO)
- [ ] 추가 멤버 정보 수집 및 등록
- [ ] Publications 페이지에 실제 논문 추가
- [ ] Events 페이지에 세미나/행사 정보 추가
- [ ] 배너 이미지 교체 (`/images/banner.jpg`)
- [ ] Alumni 정보 추가
