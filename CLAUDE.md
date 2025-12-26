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
| `_data/team_members.yml` | 대학원생 정보 (비어있음) |
| `_data/alumni.yml` | 졸업생 정보 (비어있음) |
| `_pages/home.md` | 홈페이지 |
| `_pages/members.md` | 멤버 페이지 |
| `_pages/research.md` | 연구 페이지 |
| `_pages/publications.md` | 출판물 페이지 |
| `_pages/events.md` | 이벤트 페이지 |
| `/images/` | 이미지 폴더 (멤버 사진 등) |

## Technical Notes
- GitHub Pages는 `jekyll-scholar` 플러그인 지원 안 함
- `jekyll-sitemap` 플러그인만 사용
- bibliography 태그 사용 금지

## 멤버 추가 방법
1. 사진 파일 → `/images/` 폴더에 저장
2. `_data/team_members.yml` 수정:
```yaml
- name: 홍길동
  photo: hong_gildong.jpg
  info: PhD Student
  email: gildong@korea.ac.kr
  scholar: https://scholar.google.com/citations?user=XXXXX
```
3. Git commit & push

---

## Session Log

### 2024-12-25: 초기 설정 완료

#### 완료된 작업
1. **GitHub Organization 생성**: `kmapgroup`
   - URL: https://github.com/kmapgroup

2. **웹사이트 생성 및 배포**
   - Repository: `kmapgroup.github.io`
   - Allan Lab 템플릿 적용
   - GitHub Pages로 배포 완료

3. **사이트 구조 설정**
   - 메뉴: Home, Members, Research, Publications, Events
   - PI 정보 추가 (Woo Chang Kang)
   - 연구 주제 3가지 작성

4. **빌드 오류 수정**
   - `jekyll-scholar` 플러그인 제거 (GitHub Pages 미지원)
   - `publications.md`에서 bibliography 태그 제거

5. **멤버 정보 수집 준비**
   - Google Form 양식 설계
   - 수집 항목: 이름, 소속, 직위, 이메일, 사진, SNS 링크 등

#### 다음 단계 (TODO)
- [ ] Google Form 생성 및 멤버들에게 배포
- [ ] 수집된 멤버 정보 웹사이트에 추가
- [ ] Publications 페이지에 실제 논문 추가
- [ ] Events 페이지에 세미나/행사 정보 추가
- [ ] 배너 이미지 교체 (`/images/banner.jpg`)
