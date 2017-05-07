import { Component, OnInit } from '@angular/core';
import { CurrentUser, Gifts, PromoTools, IMSData } from '../../../Models';
import { ReportsService, PromoToolsService, GiftService, IMSService, AuthenticationService } from '../../../services';
import { Location } from '@angular/common';
import * as hf from '../../helpers/helper.functions'
// import { nvD3 } from 'ng2-nvd3'
import * as d3 from 'd3'
import * as d3Hierarchy from "d3-hierarchy";
// declare let d3, nv: any;

@Component({
    selector: 'rpt-promo',
    templateUrl: './promo.html',
    styleUrls: ['../../../Styles/PrintPortrait.css', './promo.css']
})
export class PromoReportComponent implements OnInit {
    constructor(private srv: ReportsService, private srvGft: GiftService, private srvProm: PromoToolsService,
        private auth: AuthenticationService, private srvIms: IMSService, private location: Location) { }
    currentUser: CurrentUser = this.auth.getUser()
    selectedGift: number
    gftList: Gifts[] = []
    imsList: IMSData[] = []
    today = new Date()
    fromDate: string = hf.handleDate(this.today);
    toDate: string = hf.handleDate(this.today);
    imsID: number = null
    options
    data
    original: PromoTools[] = []
    unique

    ngOnInit() {
        this.srvGft.getGift().subscribe(gft => {
            this.gftList = gft;
            this.srvIms.getIMS().subscribe(ims => this.imsList = ims)
        })
    }
    ViewReport() {
        this.srv.getPromo(hf.handleDate(new Date(this.fromDate)), hf.handleDate(new Date(this.toDate)), this.imsID).subscribe(ret => {
            this.original = ret
            this.unique = ret.map(obj => { return obj.GiftName; });
            this.unique = this.unique.filter((x, i, a) => a.indexOf(x) == i)
            this.data = this.unique.map(gft => {
                return {
                    name: gft, children: ret
                        .filter(r => r.GiftName == gft)
                        .map(f => {
                            return { name: f.ToolName, size: f.Qty == null ? 0 : f.Qty }
                        })
                }
            })
            this.data = {name: "Rpt", children: this.data }
            // this.drawReport()
        })
    }
    goBack() {
        this.location.back()
    }
    printReport() {
        window.print()
    }
    // margin
    // width
    // height
    // x
    // barHeight
    // color
    // duration
    // delay
    // partition
    // xAxis
    // svg
    // root

    // drawReport() {
    //     this.margin = { top: 30, right: 120, bottom: 0, left: 120 };
    //     this.width = 960 - this.margin.left - this.margin.right;
    //     this.height = 500 - this.margin.top - this.margin.bottom;
    //     this.x = d3.scale.linear().range([0, this.width]);
    //     this.barHeight = 20;
    //     this.color = d3.scale.ordinal().range(["steelblue", "#ccc"]);
    //     this.duration = 750;
    //     this.delay = 25;
    //     this.xAxis = d3.svg.axis().scale(this.x).orient("top");
    //     // this.root = d3Hierarchy.stratify()
    //     //     .id(function (d: PromoTools) { return d.ToolName; })
    //     //     .parentId(function (d: PromoTools) { return d.GiftName; })
    //     //     (this.original);
    //     this.partition = d3.layout.partition().value(function (d) { return d.value; });

    //     var svg = d3.select(".svgRpt").append("svg")
    //         .attr("width", this.width + this.margin.left + this.margin.right)
    //         .attr("height", this.height + this.margin.top + this.margin.bottom)
    //         .append("g")
    //         .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    //     svg.append("rect")
    //         .attr("class", "background")
    //         .attr("width", this.width)
    //         .attr("height", this.height)
    //         .on("click", this.up);

    //     svg.append("g")
    //         .attr("class", "x axis");

    //     svg.append("g")
    //         .attr("class", "y axis")
    //         .append("line")
    //         .attr("y1", "100%");

    //     this.partition.nodes(this.data);
    //     this.x.domain([0, this.data.value]).nice();
    //     this.down(this.data, 0);
    // }
    // down(d, i) {
    //     if (!d.children) return;
    //     var end = this.duration + d.children.length * this.delay;

    //     // Mark any currently-displayed bars as exiting.
    //     var exit = this.svg.selectAll(".enter")
    //         .attr("class", "exit");

    //     // Entering nodes immediately obscure the clicked-on bar, so hide it.
    //     exit.selectAll("rect").filter(function (p) { return p === d; })
    //         .style("fill-opacity", 1e-6);

    //     // Enter the new bars for the clicked-on data.
    //     // Per above, entering bars are immediately visible.
    //     var enter = this.bar(d)
    //         .attr("transform", this.stack(i))
    //         .style("opacity", 1);

    //     // Have the text fade-in, even though the bars are visible.
    //     // Color the bars as parents; they will fade to children if appropriate.
    //     enter.select("text").style("fill-opacity", 1e-6);
    //     enter.select("rect").style("fill", this.color(true));

    //     // Update the x-scale domain.
    //     this.x.domain([0, d3.max(d.children, function (d) { return d as number; })]).nice();

    //     // Update the x-axis.
    //     this.svg.selectAll(".x.axis").transition()
    //         .duration(this.duration)
    //         .call(this.xAxis);

    //     // Transition entering bars to their new position.
    //     var enterTransition = enter.transition()
    //         .duration(this.duration)
    //         .delay(function (d, i) { return i * this.delay; })
    //         .attr("transform", function (d, i) { return "translate(0," + this.barHeight * i * 1.2 + ")"; });

    //     // Transition entering text.
    //     enterTransition.select("text")
    //         .style("fill-opacity", 1);

    //     // Transition entering rects to the new x-scale.
    //     enterTransition.select("rect")
    //         .attr("width", function (d) { return this.x(d.value); })
    //         .style("fill", function (d) { return this.color(!!d.children); });

    //     // Transition exiting bars to fade out.
    //     var exitTransition = exit.transition()
    //         .duration(this.duration)
    //         .style("opacity", 1e-6)
    //         .remove();

    //     // Transition exiting bars to the new x-scale.
    //     exitTransition.selectAll("rect")
    //         .attr("width", function (d) { return this.x(d.value); });

    //     // Rebind the current node to the background.
    //     this.svg.select(".background")
    //         .datum(d)
    //         .transition()
    //         .duration(end);

    //     d.index = i;
    // }

    // up(d) {
    //     if (!d.parent) return;
    //     var end = this.duration + d.children.length * this.delay;

    //     // Mark any currently-displayed bars as exiting.
    //     var exit = this.svg.selectAll(".enter")
    //         .attr("class", "exit");

    //     // Enter the new bars for the clicked-on data's parent.
    //     var enter = this.bar(d.parent)
    //         .attr("transform", function (d, i) { return "translate(0," + this.barHeight * i * 1.2 + ")"; })
    //         .style("opacity", 1e-6);

    //     // Color the bars as appropriate.
    //     // Exiting nodes will obscure the parent bar, so hide it.
    //     enter.select("rect")
    //         .style("fill", function (d) { return this.color(!!d.children); })
    //         .filter(function (p) { return p === d; })
    //         .style("fill-opacity", 1e-6);

    //     // Update the x-scale domain.
    //     this.x.domain([0, d3.max(d.parent.children, function (d) { return d as number; })]).nice();

    //     // Update the x-axis.
    //     this.svg.selectAll(".x.axis").transition()
    //         .duration(this.duration)
    //         .call(this.xAxis);

    //     // Transition entering bars to fade in over the full duration.
    //     var enterTransition = enter.transition()
    //         .duration(end)
    //         .style("opacity", 1);

    //     // Transition entering rects to the new x-scale.
    //     // When the entering parent rect is done, make it visible!
    //     enterTransition.select("rect")
    //         .attr("width", function (d) { return this.x(d.value); })
    //         .each("end", function (p) { if (p === d) d3.select(this).style("fill-opacity", null); });

    //     // Transition exiting bars to the parent's position.
    //     var exitTransition = exit.selectAll("g").transition()
    //         .duration(this.duration)
    //         .delay(function (d, i) { return i * this.delay; })
    //         .attr("transform", this.stack(d.index));

    //     // Transition exiting text to fade out.
    //     exitTransition.select("text")
    //         .style("fill-opacity", 1e-6);

    //     // Transition exiting rects to the new scale and fade to parent color.
    //     exitTransition.select("rect")
    //         .attr("width", function (d) { return this.x(d.value); })
    //         .style("fill", this.color(true));

    //     // Remove exiting nodes when the last child has finished transitioning.
    //     exit.transition()
    //         .duration(end)
    //         .remove();

    //     // Rebind the current parent to the background.
    //     this.svg.select(".background")
    //         .datum(d.parent)
    //         .transition()
    //         .duration(end);
    // }

    // // Creates a set of bars for the given data node, at the specified index.
    // bar(d) {
    //     var bar = this.svg.insert("g", ".y.axis")
    //         .attr("class", "enter")
    //         .attr("transform", "translate(0,5)")
    //         .selectAll("g")
    //         .data(d.children)
    //         .enter().append("g")
    //         .style("cursor", function (d) { return !d.children ? null : "pointer"; })
    //         .on("click", this.down);

    //     bar.append("text")
    //         .attr("x", -6)
    //         .attr("y", this.barHeight / 2)
    //         .attr("dy", ".35em")
    //         .style("text-anchor", "end")
    //         .text(function (d) { return d.name; });

    //     bar.append("rect")
    //         .attr("width", function (d) { return this.x(d.value); })
    //         .attr("height", this.barHeight);

    //     return bar;
    // }

    // // A stateful closure for stacking bars horizontally.
    // stack(i) {
    //     var x0 = 0;
    //     return function (d) {
    //         var tx = "translate(" + x0 + "," + this.barHeight * i * 1.2 + ")";
    //         x0 += this.x(d.value);
    //         return tx;
    //     };
    // }
}