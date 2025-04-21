import Dygraph, { dygraphs } from '../types'
import { expectType } from 'tsd';

const dygraph = new Dygraph('container', [], {});
expectType<Dygraph>(dygraph);

expectType<[number, number]>(dygraph.dateWindow_)
expectType<dygraphs.Layout>(dygraph.layout_)
expectType<dygraphs.DataHandler>(dygraph.dataHandler_)
expectType<HTMLElement>(dygraph.maindiv_)
expectType<dygraphs.Data>(dygraph.file_)
expectType<dygraphs.DygraphsPluginDict[]>(dygraph.plugins_)
expectType<dygraphs.DygraphsPlugin | undefined>(dygraph.plugins_.find(p => true)?.plugin)

expectType<{
    SECONDLY: number
    TWO_SECONDLY: number
    FIVE_SECONDLY: number
    TEN_SECONDLY: number
    THIRTY_SECONDLY: number
    MINUTELY: number
    TWO_MINUTELY: number
    FIVE_MINUTELY: number
    TEN_MINUTELY: number
    THIRTY_MINUTELY: number;
    HOURLY: number;
    TWO_HOURLY: number;
    SIX_HOURLY: number;
    DAILY: number;
    TWO_DAILY: number;
    WEEKLY: number;
    MONTHLY: number;
    QUARTERLY: number;
    BIANNUAL: number;
    ANNUAL: number;
    DECADAL: number;
    CENTENNIAL: number;
    NUM_GRANULARITIES: number
}>(Dygraph.Granularity)

expectType<((prevPoint: dygraphs.Point, curPoint: dygraphs.Point) => boolean) | number | undefined>(dygraph.getOption('gapThreshold'))

type UnderlayCallback = ((context: CanvasRenderingContext2D, area: Readonly<dygraphs.Area>, dygraph: Readonly<Dygraph>) => void) | null | undefined
expectType<UnderlayCallback>(dygraph.getOption('underlayCallback'))

expectType<(a: number, b: number, pixels: number, opts: dygraphs.AxisOptionView) => number>(Dygraph.pickDateTickGranularity)

expectType<dygraphs.AxisOptionView>(dygraph.optionsViewForAxis_('x'))

