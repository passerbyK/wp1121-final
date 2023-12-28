"use client";

import { useRef, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import type { ColorResult } from "react-color";

// import { toPng } from "html-to-image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useDraw } from "@/hooks/useDraw";
import { usePost } from "@/hooks/usePost";
import type { Draw } from "@/lib/types/shared_types";

export default function Painting() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [color, setColor] = useState<string>("#000");
  const [showPicker, setShowPicker] = useState(false);
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isPost, setIsPost] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const { loading, fetchTopic, postPaint, posted } = usePost();

  const userId = session?.user?.id ?? "";

  /*
  useEffect(() => {
    const checkPost = async () => {
      try {
        const post = await posted({ userId });
        setIsPost(post);
      } catch (error) {
        console.error("Error fetching the topic:", error);
      }
    };

    checkPost();

    if (isPost === false) {
      const loadTopic = async () => {
        try {
          const fetchedTopic = await fetchTopic({ userId });
          setTopic(fetchedTopic);
        } catch (error) {
          console.error("Error fetching the topic:", error);
        }
      };

      loadTopic();

      const mainElement = document.getElementById("main-element");
      console.log(mainElement);
      if (mainElement) {
        const timer = setTimeout(() => {
          mainElement.classList.remove("blur-lg");
        }, 500);

        return () => clearTimeout(timer);
      }
    } else {
      window.alert("You have already posted today!");
      //router.push(`/personal`);
    }
  }, [userId, fetchTopic, isPost, posted, router]);
  */

  if (!userId || userId === "") {
    router.push("/auth/login");
    return <div></div>;
  }

  const handleColorIconClick = () => {
    setShowPicker(!showPicker);
  };

  const handlePostClick = async () => {
    if (elementRef.current) {
      try {
        const isConfirmed = window.confirm("Are you sure you want to post?");

        if (!isConfirmed) {
          return;
        }

        // const dataUrl = await toPng(elementRef.current, { cacheBust: false });
        await postPaint({
          userId: userId,
          topic: topic,
          description: description,
          image: "https://i.imgur.com/Rj72lvJ.jpeg",
        });
        router.push(`/personal`);
      } catch (error) {
        console.error("Error exporting canvas:", error);
      }
    }
  };

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;

    const startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  if (status !== "authenticated") {
    router.push("/auth/login");
  } else {
    return (
      <div id="main-element" className="h-full w-full bg-brand_2 overflow-y-auto">
          <div className="flex flex-col h-full w-full lg:mt-0 justify-center px-6 lg:px-12">
            <div className="mt-4 lg:flex w-full items-center gap-4 px-4 py-auto text-3xl ">
              <div className="w-full lg:w-[50%]  lg:flex items-center space-x-4">
              <div className="lg:my-4 text-txt text-center lg:text-start">
                Today's Topic:{" "}
                <span className="overflow-hidden whitespace-nowrap underline">
                  {topic}apple 
                </span>
              </div>
              <div className="grow"></div>

              <div className="flex justify-center lg:justify-end gap-4">
              <div
                className="z-10 h-[25px] w-[25px] cursor-pointer self-center rounded-full p-2"
                onClick={handleColorIconClick}
                style={{ backgroundColor: color }}
              >
                {showPicker && (
                  <ChromePicker
                    color={color}
                    onChange={(e: ColorResult) => setColor(e.hex)}
                  />
                )}
              </div>

              <button
                type="button"
                className="flex items-end my-4 rounded-lg border-2 border-black px-2 text-base text-black"
                onClick={clear}
              >
                Clear
              </button>
              </div>

              </div>
              <div className="hidden lg:block ml-auto text-gray-500 text-xl">
                2023/12/09 {"(Sat.)"}
              </div>
            </div>
            <div className="mb-4 lg:flex gap-4">
              <div 
              className="relative lg:w-[55%] aspect-[5/3] rounded-2xl border-4 border-bdr_2"
              >
                <div ref={elementRef} className="flex justify-center h-full w-full rounded-2xl bg-white">
                  <canvas
                    ref={canvasRef}
                    onMouseDown={onMouseDown}
                    className="h-full w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="mt-2 lg:mb-0 flex flex-col lg:grow">
                <p className="w-full mb-2 flex justify-center text-center lg:hidden w-5/6 text-md mt-2 ml-2 text-start text-gray-500">
                  type something, do not exceed 50 words
                </p>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="items-start h-full w-full p-4 rounded-2xl border-4 border-bdr_2 bg-brand p-2 text-lg resize-none"
                  placeholder="Type something..."
                />
                <div className="flex justify-center">
                <p className="hidden lg:block w-5/6 text-md mt-2 ml-2 text-start text-gray-500">
                  type something to further deliver your thought, do not exceed 50 words
                </p>
                <button
                disabled={loading}
                onClick={handlePostClick}
                className="mb-10 lg:mb-4 flex lg-justify-end mt-2 rounded-2xl border-4 border-bdr bg-btn_2 px-4 py-2 text-xl text-txt"
                >
                  POST
                </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
                <p className="hidden lg:block text-md mt-2 ml-2 text-center text-black text-lg">
                  View others’ painting after you accomplish your mission.
                </p>
            </div>
          </div>
      </div>
    );
  }
}
