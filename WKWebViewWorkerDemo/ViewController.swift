//
//  ViewController.swift
//  WKWebViewWorkerDemo
//
//  Created by Daohan Chong on 9/6/21.
//

import UIKit
import WebKit

class ViewController: UIViewController {
  private lazy var webView = WKWebView(frame: .zero)

  override func viewDidLoad() {
    super.viewDidLoad()

    // Do any additional setup after loading the view.
    webView.translatesAutoresizingMaskIntoConstraints = false

    view.addSubview(webView)
    NSLayoutConstraint.activate([
      webView.topAnchor.constraint(equalTo: view.topAnchor),
      webView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
      webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
      webView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
    ])

    let url = Bundle.main.url(forResource: "index", withExtension: "html")!
    let html = try! String(contentsOf: url, encoding: .utf8)
    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
//      self.webView.loadHTMLString(html, baseURL: nil)
      self.webView.load(URLRequest(url: URL(string: "https://bing.com")!))
    }
  }
}
