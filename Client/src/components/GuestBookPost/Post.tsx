import { useState } from 'react';

const Post = (props: postProps) => {
  const {
    postId,
    name,
    content,
    secret,
    password,
    createdAt,
    modifyGuestbook,
    deleteGuestbook,
  } = props;

  const [isSecret, setIsSecret] = useState(secret);
  const [isModify, setIsModify] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [modifyContent, setModifyContent] = useState(content);
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputPassword = (text: string) => {
    setConfirmPassword(text);
  };

  const inputModifyContent = (text: string) => {
    setModifyContent(text);
  };

  const verifyPassword = () => {
    if (
      confirmPassword !== process.env.REACT_APP_GUESTBOOK_ADMIN_PASSWORD &&
      confirmPassword !== password
    ) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="w-full py-2 flex flex-col justify-between">
        <div className="md:pt-4 pl-4 text-lg">
          <p>{name}</p>
        </div>
        <div className="w-full border rounded-xl p-4 flex flex-col md:flex-row justify-between">
          <div className="w-full pr-5 flex flex-col justify-between">
            <div>
              {isSecret && <p>비밀글 입니다.</p>}
              {isModify && (
                <textarea
                  className="border rounded-md py-1 px-3 w-full"
                  defaultValue={content}
                  placeholder="내용을 입력해주세요."
                  onChange={(event: any) =>
                    inputModifyContent(event.target.value)
                  }
                />
              )}
              {!isSecret && !isModify && <p>{content}</p>}
            </div>
            <div>
              <p className="text-xs text-gray-400 mt-4">
                {new Date(createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 flex flex-col text-xs justify-center">
            {isSecret || isModify || isDelete ? (
              <input
                placeholder="비밀번호를 입력해주세요"
                className="border rounded-md py-1 px-3"
                onChange={(event) => inputPassword(event.target.value)}
              />
            ) : (
              <>
                <div className="flex flex-row md:flex-col justify-around">
                  <button
                    className="w-20 border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                    onClick={() => setIsModify(true)}
                  >
                    <p>수정</p>
                  </button>
                  <button
                    className="w-20 border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                    onClick={() => setIsDelete(true)}
                  >
                    <p>삭제</p>
                  </button>
                </div>
              </>
            )}
            {isSecret && (
              <>
                <button
                  className="border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                  onClick={() => verifyPassword() && setIsSecret(false)}
                >
                  <p>확인하기</p>
                </button>
              </>
            )}
            {isModify && (
              <>
                <div className="flex flex-row justify-around">
                  <button
                    className="w-20 border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                    onClick={() => {
                      if (verifyPassword()) {
                        modifyGuestbook(postId, modifyContent);
                        setIsModify(false);
                      }
                    }}
                  >
                    <p>수정</p>
                  </button>
                  <button
                    className="w-20 border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                    onClick={() => setIsModify(false)}
                  >
                    <p>취소</p>
                  </button>
                </div>
              </>
            )}
            {isDelete && (
              <>
                <div className="flex flex-row justify-around">
                  <button
                    className="w-20 border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                    onClick={() => {
                      if (verifyPassword()) {
                        deleteGuestbook(postId);
                        setIsModify(false);
                      }
                    }}
                  >
                    <p>삭제</p>
                  </button>
                  <button
                    className="w-20 border rounded-lg my-1 py-1 px-2 text-gray-600 hover:text-white hover:bg-gray-500"
                    onClick={() => setIsDelete(false)}
                  >
                    <p>취소</p>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

type postProps = {
  postId: number;
  name: string;
  content: string;
  secret: boolean;
  password: string;
  createdAt: string;
  modifyGuestbook: (postId: number, content: string) => void;
  deleteGuestbook: (postId: number) => void;
};
