import { Injectable } from '@angular/core';

import * as Webflow from 'webflow-api';
import { EMPTY, Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface WebflowApi {
  sites: () => Promise<Site[]>;
  site: ({ siteId }: { siteId: string }) => Promise<Site>;
  collections: ({ siteId }: { siteId: string }) => Promise<Collection[]>;
  collection: ({ collectionId }: { collectionId: string }) => Promise<Collection[]>;
  items: ({ collectionId }: { collectionId: string }) => Promise<Page<Item>>;
  item: ({ collectionId, itemId }: { collectionId: string, itemId: string }) => Promise<Item>;
}

export interface Site {
  _id: string;
  createdOn: string;
  name: string;
}

export interface Collection {
  _id: string;
  lastUpdated: string;
  createdOn: string;
  name: string;
}

export interface Item {
  [key: string]: string;
}

export interface Page<T> {
  items: T[];
  count: number;
  limit: number;
  offset: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class WebflowService {

  private api: WebflowApi;

  constructor() {
    this.api = new Webflow({
      endpoint: '/webflow',
      token: '76070838dfba49869ab9a542dcd8b8faf819a0f251fb252992da43dd301193d8'
    });
  }

  getSites(): Observable<Site[]> {
    return from(this.api.sites());
  }

  getSite(id: string): Observable<Site> {
    return from(this.api.site({ siteId: id }));
  }

  getCollection(siteId: string, collectionName: string): Observable<Collection[]> {
    return from(this.api.collections({ siteId }))
    .pipe(
      map((collectionList) => {
        console.log('collectionList', collectionList);
        return collectionList.filter((collection) => collection.name === collectionName);
      })
    );
  }

  getCollectionItems(siteId: string, collectionName: string): Observable<Page<Item>> {
    return from(this.api.collections({ siteId }))
    .pipe(
      map((collectionList) => {
        return collectionList.find((collection) => collection.name === collectionName);
      }),
      switchMap((collection) => {
        return from(this.api.items({ collectionId: collection._id }));
      })
    );
  }

  getCollectionItem(siteId: string, collectionName: string, itemId: string): Observable<Item> {
    return from(this.api.collections({ siteId }))
    .pipe(
      map((collectionList) => {
        return collectionList.find((collection) => collection.name === collectionName);
      }),
      switchMap((collection) => {
        return from(this.api.item({ collectionId: collection._id, itemId }));
      })
    );
  }
}
