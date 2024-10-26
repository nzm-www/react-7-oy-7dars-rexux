import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
function Forma() {
  const dispatch = useDispatch();

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const jobtitleRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [users, setUsers] = useState([]);

  function handlecolik(e) {
    e.preventDefault();

    const user = {
      id: Date.now(),
      name: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      job: jobtitleRef.current.value,
      company: companyRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    setUsers((prevUsers) => [...prevUsers, users]);

    dispatch({ type: "ADD", payload: user });
  }

  return (
    <div>
      <div>
        <div className="flex items-center justify-center pt-24">
          <div class="bg-white p-10 rounded-lg shadow-lg w-[800px] ">
            <div class="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
              <div class="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <div class="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                  <div class="w-[100px] h-[100px] aspect-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 100 100"
                      height="100"
                      width="100"
                    >
                      <g clip-path="url(#clip0_2721_15386)">
                        <rect fill="#EAEFF4" height="100" width="100"></rect>
                        <path
                          fill="#DCE8F3"
                          d="M-50 4.28715L20.8808 86L86 18.8693L-41.0227 -97L-50 4.28715Z"
                        ></path>
                        <path
                          fill="#50FFD2"
                          d="M82.3191 48.7522C82.3191 66.7029 65.9852 81.2548 45.8364 81.2548C25.6876 81.2548 9.35376 66.7029 9.35376 48.7522C9.35376 30.8014 25.6876 16.2495 45.8364 16.2495C65.9852 16.2495 82.3191 30.8014 82.3191 48.7522Z"
                        ></path>
                        <path
                          fill="#A9BFD0"
                          d="M45.7071 30.4947C47.9995 41.4191 41.9487 51.847 32.1922 53.7861C22.4358 55.7252 12.6682 48.4412 10.3757 37.5169C8.08326 26.5925 14.134 16.1646 23.8905 14.2255C33.647 12.2864 43.4146 19.5704 45.7071 30.4947Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M31.6555 51.2282C39.6264 49.644 45.1479 40.8774 43.0788 31.0171C41.0096 21.1568 32.3982 15.1991 24.4273 16.7834C16.4563 18.3676 10.9349 27.1342 13.004 36.9945C15.0732 46.8547 23.6845 52.8125 31.6555 51.2282ZM32.1922 53.7861C41.9487 51.847 47.9995 41.4191 45.7071 30.4947C43.4146 19.5704 33.647 12.2864 23.8905 14.2255C14.134 16.1646 8.08326 26.5925 10.3757 37.5169C12.6682 48.4412 22.4358 55.7252 32.1922 53.7861Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M40.8267 35.0677C42.2059 41.6399 38.741 47.8786 33.0877 49.0022C27.4345 50.1258 21.7335 45.7088 20.3544 39.1366C18.9752 32.5644 22.4401 26.3257 28.0933 25.2021C33.7466 24.0785 39.4475 28.4955 40.8267 35.0677Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M32.3363 45.4212C35.3717 44.8179 38.2419 41.0162 37.1471 35.7991C36.0523 30.5819 31.8803 28.1798 28.8448 28.7831C25.8094 29.3864 22.9392 33.1881 24.034 38.4053C25.1288 43.6225 29.3008 46.0245 32.3363 45.4212ZM33.0877 49.0022C38.741 47.8786 42.2059 41.6399 40.8267 35.0677C39.4475 28.4955 33.7466 24.0785 28.0933 25.2021C22.4401 26.3257 18.9752 32.5644 20.3544 39.1366C21.7335 45.7088 27.4345 50.1258 33.0877 49.0022Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#A9BFD0"
                          d="M56.5178 30.4947C54.2253 41.4191 60.2761 51.847 70.0326 53.7861C79.7891 55.7252 89.5567 48.4412 91.8491 37.5169C94.1416 26.5925 88.0908 16.1646 78.3343 14.2255C68.5778 12.2864 58.8102 19.5704 56.5178 30.4947Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M70.5694 51.2282C62.5984 49.644 57.0769 40.8774 59.1461 31.0171C61.2152 21.1568 69.8266 15.1991 77.7976 16.7834C85.7685 18.3676 91.29 27.1342 89.2208 36.9945C87.1517 46.8547 78.5403 52.8125 70.5694 51.2282ZM70.0326 53.7861C60.2761 51.847 54.2253 41.4191 56.5178 30.4947C58.8102 19.5704 68.5778 12.2864 78.3343 14.2255C88.0908 16.1646 94.1416 26.5925 91.8491 37.5169C89.5567 48.4412 79.7891 55.7252 70.0326 53.7861Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M60.3897 35.5306C58.9569 42.3585 62.2481 48.7785 67.7409 49.8702C73.2337 50.9619 78.848 46.3118 80.2808 39.484C81.7136 32.6562 78.4224 26.2361 72.9296 25.1444C67.4368 24.0527 61.8225 28.7028 60.3897 35.5306Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M68.4924 46.2892C65.8196 45.758 62.8699 41.9777 64.0693 36.2619C65.2688 30.5462 69.5053 28.1942 72.1781 28.7254C74.8509 29.2566 77.8006 33.0369 76.6012 38.7527C75.4017 44.4684 71.1652 46.8204 68.4924 46.2892ZM67.7409 49.8702C62.2481 48.7785 58.9569 42.3585 60.3897 35.5306C61.8225 28.7028 67.4368 24.0527 72.9296 25.1444C78.4224 26.2361 81.7136 32.6562 80.2808 39.484C78.848 46.3118 73.2337 50.9619 67.7409 49.8702Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#A9BFD0"
                          d="M50.2344 26.5635C25.0307 26.5635 16.3064 41.4427 16.3064 59.7971V78.8457C16.3064 82.0187 19.8296 82.721 21.1569 85.3949C29.4907 78.7198 38.8232 76.8192 52.3032 76.8192C64.1602 76.8192 74.085 78.148 82.1848 83.4734C82.9007 81.419 84.1624 81.1375 84.1624 78.8457V59.7971C84.1624 41.4427 73.6932 26.5635 50.2344 26.5635Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M25.8501 38.0028C21.0919 43.3702 18.9889 50.9723 18.9889 59.7971V78.8457C18.9889 79.2617 19.1044 79.5667 20.0172 80.3572C20.1277 80.4529 20.2621 80.5631 20.414 80.6876C20.7564 80.9682 21.1877 81.3217 21.6352 81.7471C30.1152 75.8481 39.6557 74.2086 52.3032 74.2086C63.1811 74.2086 72.9213 75.2979 81.1986 79.817C81.3292 79.6171 81.3776 79.5141 81.4073 79.4266C81.4361 79.3419 81.4798 79.1752 81.4798 78.8457V59.7971C81.4798 51.0773 78.9939 43.454 73.9996 38.0417C69.0487 32.6765 61.3482 29.1741 50.2344 29.1741C38.1952 29.1741 30.5454 32.7063 25.8501 38.0028ZM83.4869 81.1799C83.87 80.5863 84.1624 79.9489 84.1624 78.8457V59.7971C84.1624 41.4427 73.6932 26.5635 50.2344 26.5635C25.0307 26.5635 16.3064 41.4427 16.3064 59.7971V78.8457C16.3064 80.7087 17.521 81.72 18.7925 82.7787C19.0211 82.9689 19.2515 83.1608 19.477 83.3593C20.1337 83.9376 20.749 84.5731 21.1569 85.3949C21.8683 84.8251 22.587 84.2901 23.3149 83.788C31.1142 78.4091 39.9739 76.8192 52.3032 76.8192C63.0495 76.8192 72.2087 77.9108 79.8605 82.0799C80.6513 82.5108 81.4261 82.9746 82.1848 83.4734C82.4717 82.6501 82.8463 82.1116 83.1921 81.6142C83.2939 81.4679 83.3931 81.3252 83.4869 81.1799Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#C9DDED"
                          d="M50.5379 81.3752C32.9778 81.3752 18.7426 75.8644 18.7426 69.0665V62.0115C18.7426 60.8363 19.0498 61.611 20.2935 60.6206C28.4363 61.1867 37.9053 62.0115 50.5379 62.0115C61.6497 62.0115 73.4151 60.6206 81.2985 59.5858C81.9693 60.3467 82.3333 61.1626 82.3333 62.0115V69.0665C82.3333 75.8644 68.098 81.3752 50.5379 81.3752Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M43.3794 49.1864C43.3794 52.0937 41.0479 54.4505 38.1718 54.4505C35.2957 54.4505 32.9641 52.0937 32.9641 49.1864C32.9641 46.2792 35.2957 43.9224 38.1718 43.9224C41.0479 43.9224 43.3794 46.2792 43.3794 49.1864Z"
                        ></path>
                        <path
                          fill="white"
                          d="M38.7763 47.4369C38.7763 49.0604 37.4743 50.3765 35.8682 50.3765C34.2621 50.3765 32.9601 49.0604 32.9601 47.4369C32.9601 45.8134 34.2621 44.4973 35.8682 44.4973C37.4743 44.4973 38.7763 45.8134 38.7763 47.4369Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M67.931 49.1864C67.931 52.0937 65.5995 54.4505 62.7234 54.4505C59.8473 54.4505 57.5157 52.0937 57.5157 49.1864C57.5157 46.2792 59.8473 43.9224 62.7234 43.9224C65.5995 43.9224 67.931 46.2792 67.931 49.1864Z"
                        ></path>
                        <path
                          fill="white"
                          d="M63.3266 47.4369C63.3266 49.0604 62.0246 50.3765 60.4185 50.3765C58.8124 50.3765 57.5104 49.0604 57.5104 47.4369C57.5104 45.8134 58.8124 44.4973 60.4185 44.4973C62.0246 44.4973 63.3266 45.8134 63.3266 47.4369Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M45.5681 51.1016C45.5681 48.5784 47.6699 46.533 50.2626 46.533C52.8553 46.533 54.957 48.5784 54.957 51.1016V55.0176C54.957 57.5408 52.8553 59.5862 50.2626 59.5862C47.6699 59.5862 45.5681 57.5408 45.5681 55.0176V51.1016Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M49.2236 66.0938V58.803H51.6379V66.0641L55.8604 63.8106C56.445 63.4986 57.1788 63.7069 57.4993 64.2758C57.8199 64.8447 57.6059 65.5588 57.0213 65.8708L50.4399 69.3832L43.6605 65.8782C43.0717 65.5738 42.848 64.8625 43.1607 64.2895C43.4735 63.7165 44.2044 63.4988 44.7931 63.8032L49.2236 66.0938Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#A9BFD0"
                          d="M12.1587 74.8406C9.81049 64.2381 14.1742 62.3715 18.3627 58.803C19.7332 67.6509 29.0123 70.788 35.1039 71.2801C36.9033 71.4254 38.6658 72.3381 39.362 73.9594C40.8114 77.3347 41.5295 81.1623 36.1991 84.0859C27.699 88.7479 14.0742 83.4894 12.1587 74.8406Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M19.2276 56.5049L17.5677 57.9191C17.0985 58.3189 16.6262 58.6973 16.1459 59.0821C16.1073 59.113 16.0687 59.144 16.0299 59.175C15.5155 59.5874 14.9914 60.0096 14.4885 60.4504C13.4793 61.3347 12.5121 62.3295 11.7628 63.599C10.2363 66.1852 9.77085 69.6342 10.9788 75.0883C12.0505 79.927 16.3317 83.6474 21.2657 85.5473C26.2124 87.4522 32.1415 87.66 36.7919 85.1094C39.6933 83.5181 41.1324 81.5627 41.5131 79.3896C41.8788 77.3021 41.2204 75.2403 40.4759 73.5065C39.5524 71.3558 37.2948 70.2783 35.2038 70.1094C32.2929 69.8743 28.6467 69.0054 25.5966 67.1751C22.5736 65.3611 20.1773 62.6357 19.5565 58.628L19.2276 56.5049ZM17.6161 60.9476C18.7624 64.7232 21.3422 67.3824 24.3294 69.175C27.7844 71.2483 31.8235 72.194 35.0041 72.4509C36.5119 72.5727 37.7794 73.3206 38.2483 74.4125C38.9532 76.0541 39.3786 77.5937 39.1332 78.9947C38.9027 80.3101 38.0356 81.7302 35.6066 83.0625C31.7569 85.174 26.6235 85.0836 22.1539 83.3625C17.6717 81.6365 14.1827 78.4032 13.3389 74.5932C12.1986 69.4446 12.7409 66.6591 13.8563 64.7693C14.428 63.8007 15.1904 62.9971 16.104 62.1965C16.5624 61.7947 17.0481 61.4028 17.5648 60.9887C17.5819 60.975 17.599 60.9613 17.6161 60.9476Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#A9BFD0"
                          d="M88.5735 74.8406C90.9217 64.2381 86.5579 62.3715 82.3695 58.803C80.999 67.6509 71.7199 70.788 65.6283 71.2801C63.8289 71.4254 62.0664 72.3381 61.3702 73.9594C59.9207 77.3347 59.2026 81.1623 64.5331 84.0859C73.0332 88.7479 86.6579 83.4894 88.5735 74.8406Z"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M81.5045 56.5049L83.1645 57.9191C83.6337 58.3189 84.106 58.6973 84.5862 59.0821C84.6248 59.113 84.6635 59.144 84.7022 59.175C85.2167 59.5874 85.7407 60.0096 86.2437 60.4504C87.2529 61.3347 88.2201 62.3295 88.9694 63.599C90.4958 66.1852 90.9613 69.6342 89.7534 75.0883C88.6817 79.927 84.4005 83.6474 79.4665 85.5473C74.5197 87.4522 68.5907 87.66 63.9403 85.1094C61.0389 83.5181 59.5998 81.5627 59.2191 79.3896C58.8533 77.3021 59.5117 75.2403 60.2562 73.5065C61.1798 71.3558 63.4373 70.2783 65.5284 70.1094C68.4393 69.8743 72.0855 69.0054 75.1356 67.1751C78.1586 65.3611 80.5549 62.6357 81.1757 58.628L81.5045 56.5049ZM83.116 60.9476C81.9698 64.7232 79.39 67.3824 76.4028 69.175C72.9478 71.2483 68.9087 72.194 65.728 72.4509C64.2202 72.5727 62.9527 73.3206 62.4838 74.4125C61.7789 76.0541 61.3536 77.5937 61.599 78.9947C61.8295 80.3101 62.6966 81.7302 65.1256 83.0625C68.9753 85.174 74.1087 85.0836 78.5782 83.3625C83.0605 81.6365 86.5495 78.4032 87.3933 74.5932C88.5336 69.4446 87.9913 66.6591 86.8759 64.7693C86.3042 63.8007 85.5418 62.9971 84.6282 62.1965C84.1698 61.7947 83.684 61.4028 83.1674 60.9887C83.1503 60.975 83.1332 60.9613 83.116 60.9476Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M67.4381 76.9913C67.9314 77.4278 67.9677 78.1708 67.5192 78.6509C65.9078 80.3759 62.6335 81.5695 59.8422 80.0673C59.2588 79.7533 59.0474 79.0385 59.37 78.4707C59.6926 77.9029 60.4271 77.6971 61.0106 78.0111C62.571 78.8509 64.6617 78.217 65.7328 77.0704C66.1813 76.5903 66.9447 76.5549 67.4381 76.9913Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M71.9605 79.8826C72.5907 80.0943 72.9252 80.7632 72.7077 81.3765C71.9259 83.5802 69.4006 85.9337 66.2268 85.6246C65.5635 85.56 65.0795 84.9842 65.1459 84.3386C65.2123 83.693 65.8039 83.2221 66.4673 83.2867C68.2415 83.4595 69.9059 82.0745 70.4255 80.6097C70.6431 79.9964 71.3303 79.6709 71.9605 79.8826Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M32.8858 76.4694C32.3925 76.9058 32.3561 77.6488 32.8046 78.1289C34.416 79.854 37.6904 81.0475 40.4817 79.5453C41.0651 79.2313 41.2765 78.5165 40.9538 77.9487C40.6312 77.3809 39.8967 77.1752 39.3133 77.4892C37.7529 78.329 35.6621 77.695 34.591 76.5484C34.1426 76.0683 33.3791 76.0329 32.8858 76.4694Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          fill="#3A546A"
                          d="M28.3633 79.3609C27.7331 79.5726 27.3986 80.2414 27.6162 80.8547C28.398 83.0585 30.9232 85.412 34.097 85.1029C34.7604 85.0382 35.2443 84.4625 35.1779 83.8169C35.1116 83.1713 34.52 82.7003 33.8566 82.765C32.0823 82.9378 30.4179 81.5528 29.8983 80.088C29.6808 79.4747 28.9935 79.1491 28.3633 79.3609Z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2721_15386">
                          <rect fill="white" height="100" width="100"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="flex flex-col self-stretch my-auto min-w-[240px]">
                  <div class="text-base text-gray-800">Antony P.Johnson</div>
                  <div class="mt-2 text-sm text-gray-500">
                    UX/UI designer, in Company Name Ltd.
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6 mb-10">
              <div id="input" class="relative">
                <input
                  ref={firstnameRef}
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="First name"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  First name
                </label>
              </div>

              <div id="input" class="relative">
                <input
                  ref={lastnameRef}
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Last name"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Last name
                </label>
              </div>

              <div id="input" class="relative">
                <input
                  ref={jobtitleRef}
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Job title"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Job title
                </label>
              </div>

              <div id="input" class="relative">
                <input
                  ref={companyRef}
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Company name"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Company name
                </label>
              </div>

              <div id="input" class="relative">
                <input
                  ref={emailRef}
                  type="text"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="E-mail"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  E-mail
                </label>
              </div>

              <div id="input" class="relative">
                <input
                  ref={phoneRef}
                  type="phone"
                  class="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Phone"
                />
                <label
                  for="floating_outlined"
                  class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone
                </label>
              </div>
            </div>

            <div class="sm:flex sm:flex-row-reverse flex gap-4">
              <button
                onClick={handlecolik}
                class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
                type="button"
              >
                <div class="flex gap-2 items-center">Save changes</div>
              </button>
              <button
                class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
                type="button"
              >
                <Link to="/">
                  <p>Back</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default Forma;
