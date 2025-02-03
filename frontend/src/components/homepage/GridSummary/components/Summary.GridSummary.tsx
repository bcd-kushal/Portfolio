/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Check, Diamond, Kanban } from "lucide-react";
import { Card } from "./_Card.GridSummary";
import { PORTFOLIO_ROUTE } from "@/common/data/_routes";
import { SUMMARY_TABLE_HEADING, SUMMARY_TABLE_RESOURCES } from "@/common/data/pages/homepage";

export default function SummaryGridSummary() {
    const checks = [
        "Edge servers with caching",
        "Built on today's tech stacks",
        "Modern ergonomic UI/UX",
    ]

    return (
        <Card className="col-span-2 sm:row-span-2 pt-7 sm:pt-6 max-sm:pb-60 relative overflow-hidden" title="Summary" svg={<Kanban width={14} height={14} />} showOnMobile link={{ url: PORTFOLIO_ROUTE }}>
            <h3 className="text-snow/60 max-sm:text-center text-2xl sm:text-xl max-sm:px-8 sm:w-3/4 sm:px-6 pt-3">
                {/* @ts-expect-error */}
                I&apos;m a <font color="white">tech-stack flexible SDE</font> with industry experience in building, deploying, maintaining <font color="white">scalable and fast</font> servers and softwares
            </h3>

            <div className="h-full flex items-end max-sm:justify-center sm:w-fit px-3 pt-8 sm:p-6">
                <div className="grid grid-cols-[16px_auto] auto-rows-min text-xs text-snow/70 items-center gap-x-2 gap-y-2 sm:gap-y-1.5">
                    {checks.map((str, index) => (
                        <Details str={str} key={index} />
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-[18%] sm:left-1/2 w-full sm:w-1/2 h-[190px] sm:h-[45%] grid *:row-start-1 *:col-start-1 text-snow/80">
                <div className="bg-matte sm:bg-[#0B0C0D] z-10 w-full h-full [mask-image:radial-gradient(70%_80%_at_15%_10%,transparent_30%,white)] sm:[mask-image:radial-gradient(80%_90%_at_15%_10%,transparent_30%,white)]" />
                <div className="border-t border-l text-xs border-snow/20 rounded-tl-[14px] ring-[0.5px] ring-offset-[6px] ring-snow/10 ring-offset-[#0B0C0D] bg-smoke/35 sm:bg-smoke/50 p-4 grid grid-cols-[1fr_3fr] auto-rows-min gap-x-3 gap-y-[3px]">
                    <div className="col-span-4 text-base pb-1.5">{SUMMARY_TABLE_HEADING}</div>
                    <div className="text-[11px]  text-snow/35">Package</div>
                    <div className="text-[11px] col-span-3 flex items-center justify-start flex-wrap gap-1 pb-1">
                        <span>Middleware CRON-job</span>
                    </div>

                    <div className="text-[11px] text-snow/35">Resources</div>
                    <div className="text-[10px] col-span-3 flex items-center justify-start flex-wrap gap-1">
                        {SUMMARY_TABLE_RESOURCES.map(({ label, svg }, index) => (
                            <div key={index} className="bg-smoke text-snow/80 py-1 px-1.5 rounded-[5px] flex items-center justify-center gap-x-1 *:leading-none">
                                {svg}
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-[11px] text-snow/35">Progress</div>
                    <div className="col-span-3 flex flex-col justify-start gap-0.5 translate-y-0.5">
                        <div className="flex items-center justify-start gap-x-1">
                            <Diamond width={10} height={10} strokeWidth={2.5} className="stroke-purple-500 fill-purple-500" />
                            <span className="text-[10px]">CI/CD Pipelines</span>
                            <span className="text-[10px] font-light text-snow/70">100%</span>
                        </div>
                        <div className="flex items-center justify-start gap-x-1">
                            <Diamond width={10} height={10} strokeWidth={2.5} className="stroke-purple-500 fill-purple-500" />
                            <span className="text-[10px]">API & Benchmarking</span>
                            <span className="text-[10px] font-light text-snow/70">100%</span>
                        </div>
                        <div className="flex items-center justify-start gap-x-1">
                            <Diamond width={10} height={10} strokeWidth={2.5} className="stroke-amber-500 *:tracking-wide" />
                            <span className="text-[10px]">UI/UX</span>
                            <span className="text-[10px] font-light text-snow/70">53% of 100%</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const Details = ({ str }: { str: string }) =>
    <>
        <Check width={16} height={16} />
        <h3>{str}</h3>
    </>