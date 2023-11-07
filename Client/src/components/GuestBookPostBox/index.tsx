const GuestBookBox = () => {
  return (
    <>
      {' '}
      <div className="border rounded-2xl mx-2 px-12 py-8">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                성함 : Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="김혜란"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                비밀번호 : Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="수정, 삭제, 비밀글 확인 시 필요합니다."
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              남기는 말 : Your message
            </label>
            <textarea
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500 "
              placeholder="이곳에 메세지를 남겨주세요."
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between pt-10">
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <div className="ml-2 text-sm">
                <label className="font-medium text-gray-900">
                  비공개 글로 작성하기 : Secret message
                </label>
                <p className="text-xs font-normal text-gray-500 ">
                  이 버튼을 누르면 저와 비밀번호를 알고있는 유저만 확인이
                  가능합니다.
                </p>
                <p className="text-xs font-normal text-gray-500 ">
                  확인, 수정, 삭제를 위해서 비밀번호를 잊지않게 조심해주세요!
                </p>
              </div>
            </div>
            <button className="mt-6 md:mt-0 border bg-gray-100 shadow-md rounded-lg px-4 py-2 hover:bg-cyan-800 hover:text-white hover:animate-bounce">
              <p>방명록 남기기</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GuestBookBox;
