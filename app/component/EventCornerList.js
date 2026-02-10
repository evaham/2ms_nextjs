"use client";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function EventCornerList({
  eventGroups,
  useOrderSystem,
  resolveImageSrc,
  onSelectItem,
}) {
  return (
    <>
      {eventGroups.map((corner) => (
        <div id={corner.id} key={corner.id} style={{ background: corner.bgColor }}>
          {/* <!-- <span>행사코너1 배너</span> --> */}
          {corner.eventImg ? (
            <div className="sample__banner sample__banner--type2 flex items-center justify-center min-h-20 bg-slate-300">
              <img className="size-full" src={resolveImageSrc(corner.eventImg)} alt="행사코너 배너" />
            </div>
          ) : null}

          <div className="goods w-full">
            {/* <!--템플릿 유형 가로형 --> */}
            {corner.templateType === "typeA" && (
              <ul
                className={`goods__list goods__list--type2 grid px-0.5 py-2.5 group gap-px overflow-hidden
                  ${corner.layoutType === "type1" ? "grid-cols-1" : ""} ${corner.layoutType === "type2" ? "grid-cols-2" : ""} ${corner.layoutType === "type3" ? "grid-cols-3" : ""} ${corner.layoutType === "type4" ? "grid-cols-4" : ""}
                `}
              >
                {corner.products.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onSelectItem(item, corner.id)}
                    data-effectjs="fade-up"
                  >
                    <div className="goods__card relative overflow-hidden w-full p-1 border border-[#d1d1d6] rounded-lg bg-white">
                      <div
                        className="goods__imgbox relative flex flex-col justify-center items-center mx-auto bg-white group-[.grid-cols-2]:h-36 group-[.grid-cols-3]:h-23 group-[.grid-cols-4]:h-18"
                        style={{ background: "white" }}
                      >
                        <div
                          className="goods__badge absolute flex top-0 left-0 size-17 
                            group-[.grid-cols-2]:size-12 group-[.grid-cols-3]:size-8 group-[.grid-cols-4]:size-6"
                        >
                          <img
                            className="max-w-full max-h-full size-auto"
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.badgeImg}`}
                            alt="뱃지 이미지"
                          />
                        </div>
                        <img className="lazyload max-w-full max-h-full size-auto" src={resolveImageSrc(item.image)} alt="상품 이미지" />
                        {useOrderSystem ? (
                          <div
                            className={`icon__cartbox ${item.cart ? "active" : ""} flex items-center justify-center absolute right-1/20 bottom-1/20 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)] 
                              group-[.grid-cols-1]:size-11 group-[.grid-cols-2]:size-11 group-[.grid-cols-3]:size-8 group-[.grid-cols-4]:size-7 [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                            `}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                            </svg>
                          </div>
                        ) : null}
                      </div>

                      <div className="goods__info text-center">
                        <div
                          className="goods__delprice previewEtc1 h-4 text-sm text-[#999] leading-tight
                            group-[.grid-cols-1]:text-base
                            group-[.grid-cols-2]:text-sm
                            group-[.grid-cols-3]:text-xs
                            group-[.grid-cols-4]:text-xs
                          "
                        >
                          {item.discountCondition ? (
                            <>
                              <span className="text-blue-600 font-bold">{item.discountCondition}</span>
                            </>
                          ) : (
                            <span className="text-gray-400 font-normal line-through">{item.normalPrice}</span>
                          )}
                        </div>
                        <div
                          className="goods__price font-bold text-[#fa5252] tracking-tight leading-tight
                            group-[.grid-cols-1]:text-[300%] 
                            group-[.grid-cols-2]:text-[190%] 
                            group-[.grid-cols-3]:text-[135%] 
                            group-[.grid-cols-4]:text-[100%]
                          "
                        >
                          {item.price.toLocaleString()}
                        </div>
                        <div
                          className="goods__name line-clamp-2 max-w-64 h-12 mt-0.5 mb-auto mx-auto font-bold break-all leading-tight
                            group-[.grid-cols-1]:text-xl group-[.grid-cols-1]:h-12
                            group-[.grid-cols-2]:text-lg group-[.grid-cols-2]:h-11
                            group-[.grid-cols-3]:text-sm group-[.grid-cols-3]:h-9
                            group-[.grid-cols-4]:text-xs group-[.grid-cols-4]:h-8
                          "
                        >
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* <!--템플릿 유형 세로형 --> */}
            {corner.templateType === "typeB" && (
              <ul id="" className="goods__list goods__list--style2 flex flex-col px-0.5 py-2.5 gap-px overflow-hidden">
                {corner.products.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => onSelectItem(item, corner.id)}
                    data-effectjs={index % 2 === 0 ? "slide-left" : "slide-right"}
                    data-effectjs-duration="500"
                  >
                    <div className="goods__card overflow-hidden flex w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                      <div className="goods__imgbox relative flex flex-col justify-center items-center w-2/5 h-32 mx-auto bg-white">
                        <div className="goods__badge absolute flex top-0 left-0 size-11">
                          <img
                            className="max-w-full max-h-full size-auto"
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.badgeImg}`}
                            alt="뱃지 이미지"
                          />
                        </div>
                        <img className="lazyload max-w-full max-h-full size-auto" src={resolveImageSrc(item.image)} alt="상품 이미지" />

                        {useOrderSystem ? (
                          <div
                            className={`icon__cartbox ${item.cart ? "active" : ""} flex items-center justify-center absolute right-1/20 bottom-1/20 size-9 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]
                              [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                            `}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                            </svg>
                          </div>
                        ) : null}
                      </div>
                      <div className="goods__info flex-1 flex flex-col justify-center">
                        <div className="goods__delprice previewEtc1 h-4 text-sm text-[#999] leading-tight [&.previewEtc1]:text-[#517dfb] [&.previewEtc1]:font-bold [&.previewEtc1]:no-underline">
                          {item.discountCondition ? (
                            <>
                              <span className="text-blue-600 font-bold">{item.discountCondition}</span>
                            </>
                          ) : (
                            <span className="text-gray-400 font-normal line-through">{item.normalPrice}</span>
                          )}
                        </div>
                        <div className="goods__price text-[#fa5252] text-[195%] font-bold tracking-tight leading-tight">{item.price.toLocaleString()}</div>
                        <div className="goods__name line-clamp-2 h-11 text-lg font-bold break-all leading-tight">{item.name}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* <!--템플릿 유형 텍스트형 --> */}
            {corner.templateType === "typeC" && (
              <ul id="js_changeList" className="goods__list goods__list--style3 flex flex-col px-0.5 py-2.5 gap-px">
                {corner.products.map((item, index) => (
                  <li key={index} onClick={() => onSelectItem(item, corner.id)}>
                    <div className="goods__card relative overflow-hidden flex flex-col w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                      {/* 이미지 안보임 */}
                      <div className="goods__imgbox relative flex flex-col justify-center items-center w-2/5 h-32 mx-auto bg-white" style={{ display: "none" }}>
                        <div className="goods__badge absolute flex top-0 left-0 size-11">
                          <img
                            className="max-w-full max-h-full size-auto"
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${item.badgeImg}`}
                            alt="뱃지 이미지"
                          />
                        </div>
                        <img data-src="" className="lazyload max-w-full max-h-full size-auto" src={resolveImageSrc(item.image)} />
                      </div>

                      {useOrderSystem ? (
                        <div
                          className={`icon__cartbox ${item.cart ? "active" : ""} flex items-center justify-center absolute left-1/20 bottom-1/20 size-9 bg-white border border-black/15 rounded-full shadow-[0_0_3px_rgba(0,0,0,0.2)]
                        [&.active]:border-blue-300 [&.active_svg]:fill-blue-500
                        `}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#94a3b8">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                          </svg>
                        </div>
                      ) : null}

                      <div className="goods__info flex flex-col">
                        <div className="goods__name line-clamp-2 h-9.5 mt-1 font-bold break-all leading-tight">{item.name}</div>
                        <div className="flex items-center justify-end gap-2">
                          <div className="goods__delprice previewEtc1 mt-3 text-sm leading-tight">
                            {item.discountCondition ? (
                              <>
                                <span className="text-blue-600 font-bold">{item.discountCondition}</span>
                              </>
                            ) : (
                              <span className="text-gray-400 font-normal line-through">{item.normalPrice}</span>
                            )}
                          </div>
                          <div className="goods__price text-[#fa5252] text-[195%] font-bold tracking-tight leading-tight">{item.price.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {/* <!--템플릿 유형 장문편집형 --> */}
            {corner.templateType === "typeD" && (
              <ul className="goods__list flex flex-col px-0.5 py-2.5 gap-px">
                <li>
                  <div className="goods__card relative overflow-hidden flex flex-col w-full p-1 gap-3 border border-[#d1d1d6] rounded-lg bg-white">
                    <div
                      className="goods__pre text-sm text-left p-1.5 font-sans
                        [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-bold
                        [&_h1,&_h2,&_h3]:leading-10
                        [&_h4,&_h5,&_h6]:leading-7.5
                        [&_h1]:text-[35px]
                        [&_h2]:text-[30px]
                        [&_h3]:text-[25px]
                        [&_h4]:text-[20px]
                        [&_h5]:text-[18px]
                        [&_h6]:text-[16px]
                      "
                    >
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {corner.textContent?.trim()}
                      </ReactMarkdown>
                    </div>
                  </div>
                </li>
              </ul>
            )}
            {/* <!--이미지 직접추가형 --> */}
            {corner.templateType === "typeE" && (
              <ul id="js_changeList5" className="goods__list flex flex-col p-0 gap-px">
                <li className="mb-3.5">
                  <div className="goods__card flex flex-col">
                    {corner.imageContent.map((item, index) => (
                      <div key={index} className="goods__imgbox goods__imgbox--only flex felx-col w-full h-auto mx-auto bg-white">
                        <img src={resolveImageSrc(item.image)} alt="이미지" className="lazyload w-full max-h-full size-auto ${fn:contains(f, 'thumb_') ? 'thumb cursor-pointer' : ''}" />
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
