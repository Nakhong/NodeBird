export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false, //게시글 추가 되면 추가
};
// 시퀄라이즈에서 어떤 정보와 다른 정보가 있으면 합쳐줌 합친건 대문자로 나옴
const ADD_POST = 'ADD_POST'; //게시글 추가하는 액션 변수로 빼주는게 좋음 휴먼에러 방지
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], //앞에다가 추가하셔야함. 아니면 맨 밑으로 내려감
        postAdded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

// 데이터를 구성하고 액션 구성 => 화면 구성
