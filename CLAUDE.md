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
  email: email@example.com      # 교수/연구원만 기재. 학생은 이 줄을 생략한다
  role: professor 또는 student
  research: 연구 관심사
```

### 역할(role) 구분
- `professor`: Researchers 섹션에 표시, 이메일 공개
- `student`: Students 섹션에 표시, 이메일 미기재

### 이메일 공개 규칙 (2026-08-17 변경)
- **교수/연구원**: `email: xxx@xxx.com` (공개)
- **학생**: **이메일을 아예 기재하지 않는다** (필드 자체를 생략)
- ⚠️ **주석처리(`# email:`)는 비공개가 아니다.** 이 저장소는 public이므로 주석 처리해도 raw 파일에서 그대로 읽힌다. 렌더링된 페이지에서만 가려질 뿐이다. 2026-08-17에 이 방식으로 노출돼 있던 학생 이메일 6건을 제거했다.
- 학생 이메일 원본이 필요하면 Google Form 응답 시트에서 확인한다 (저장소에 두지 않는다)

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

---

### 2025-12-30: 멤버 추가 및 홈페이지 개선

#### 완료된 작업
1. **홈페이지 사이드바 개선**
   - PI 섹션 제거 (사진, 이름, 아이콘, 학력)
   - News 섹션만 표시

2. **신규 멤버 5명 추가** (Google Form 응답 기반)
   - Sunkyoung Park (박선경) - Researcher, 고려대학교
   - Hannah Kim (김한나) - Researcher, Korea University
   - Yujin An (안유진) - MA Student, 고려대학교
   - Jae Yeon Kim (김재연) - Researcher, UNC Chapel Hill
   - Donghyun Danny Choi (최동현) - Researcher, Brown University

#### 현재 멤버 현황
| 이름 | 역할 | 이메일 공개 |
|------|------|------------|
| Woo Chang Kang (강우창) | PI | ✓ |
| Byoungha Lee (이병하) | Professor | ✓ |
| Sunkyoung Park (박선경) | Professor | ✓ |
| Hannah Kim (김한나) | Professor | ✓ |
| Jae Yeon Kim (김재연) | Professor | ✓ |
| Donghyun Danny Choi (최동현) | Professor | ✓ |
| Heedo Lee (이희도) | Student | ✗ |
| Jiwoon Kim (김지운) | Student | ✗ |
| Kyungrim Chung (정경림) | Student | ✗ |
| Sumin Kim (김수민) | Student | ✗ |
| Yujin An (안유진) | Student | ✗ |

#### 다음 단계 (TODO)
- [ ] 배너 이미지 교체 (`/images/banner.jpg`)
- [ ] Alumni 정보 추가

---

### 2026-08-17: 신규 멤버·Publications·Events 반영 (커밋 대기 중)

#### 완료된 작업
1. **Publications 페이지 채움**: 논문 9편(2025~2026, 연도별) + 저서 1권(『국제 이주의 정치학』) 반영. PDF는 올리지 않고 서지만 기재(저작권 우려).
2. **Events 페이지 채움**: Google Form 응답 기반 콜로키움·특별세미나·초청강연 10건(2024.12~2025.11) 연도별 정리.
3. **신규 멤버 3명 추가** (Google Form 응답 기반)
   - Inbok Rhee (이인복) - Researcher, Yonsei University
   - Boram Kim (김보람) - Researcher, Korea University
   - Seoyeon Kim (김서연) - MA Student, 연세대학교
4. **기존 데이터 보정**: 김재연 이메일 `jaeyeonkim@hks.harvard.edu` → `jaekim@unc.edu` (Form 응답이 최신, 소속과 일치). 박선경·김한나·김재연·이인복에 `website` 필드 추가.

#### 현재 멤버 현황 (활동 10명 + Alumni 3명)
| 이름 | 역할 | 이메일 공개 |
|------|------|------------|
| Woo Chang Kang (강우창) | PI | ✓ |
| Byoungha Lee (이병하) | Professor | ✓ |
| Sunkyoung Park (박선경) | Professor | ✓ |
| Hannah Kim (김한나) | Professor | ✓ |
| Jae Yeon Kim (김재연) | Professor | ✓ |
| Donghyun Danny Choi (최동현) | Professor | ✓ |
| Inbok Rhee (이인복) | Professor | ✓ |
| Boram Kim (김보람) | Professor | ✓ (개인 이메일 — 재검토 필요) |
| Jiwoon Kim (김지운) | Student | ✗ |
| Sumin Kim (김수민) | Student | ✗ |
| Seoyeon Kim (김서연) | Student | ✗ |

#### Alumni (2026-08-17 이동)
`_data/alumni.yml`. `duration`(재직 기간)은 자료가 없어 비어 있음 — 확인되면 채울 것.

| 이름 | 비고 |
|------|------|
| Heedo Lee (이희도) | Former MA Student, 연세대학교 |
| Kyungrim Chung (정경림) | Former MA Student, 연세대학교 |
| Yujin An (안유진) | Former MA Student, 고려대학교 국제대학원 |

#### 미해결 (다음 세션)
- [ ] **PII 유출**: `files/KMAP Working Group 멤버 정보 수집 양식(응답).xlsx`가 public repo에 커밋되어 있고 raw.githubusercontent.com으로 실제 다운로드 가능 (이메일 6건 노출). 파일 삭제 vs git 히스토리 재작성 여부 결정 필요.
- [ ] 이번 세션 변경사항(`_data/team_members.yml`, `_pages/events.md`, `_pages/publications.md`, 신규 사진 3장) 커밋·push
- [ ] 최동현이 Form 응답에 없는데 사이트엔 등록 — 유지 여부 확인
- [ ] 김보람 이메일이 개인 네이버 주소 — 기관 이메일 전환 또는 비공개 여부
- [ ] 이벤트 포스터 PDF 9장(Drive에 있음) 링크 여부
- [ ] Jekyll 빌드 미검증 (로컬에 jekyll 미설치)
- [ ] 기존 멤버 사진 파일명에 개인정보 단서 포함 (예: `주민등록증3.5x4.5cm - Kelly C.jpg`) — 정리 필요
- [ ] `local/inbox/`를 원자료 스테이징 폴더로 신설 (`.gitignore`의 `local/`에 이미 포함)
